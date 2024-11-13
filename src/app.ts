import { RegisterRoutes } from './tsoa/routes'
import express, { urlencoded, Request, Response } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './tsoa/swagger.json'
import { NotFoundError } from './errors'
import helmet from 'helmet'
import { httpLogger, logger } from './config/logger.config'
import env from './config/env.config'
import cors, { CorsOptions } from 'cors'

export const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(
  urlencoded({
    extended: true,
  }),
)
app.use(express.json())
const CORS_DOMAINS = env.CORS_DOMAINS || ''
const whitelist = CORS_DOMAINS.split(',').map((domain) => {
  return domain.trim()
})

const corsOptions: CorsOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  origin: function (origin: any, callback: any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(
  helmet({
    crossOriginEmbedderPolicy: true, //Gives control over how cross origin resources are embedded into your site
    contentSecurityPolicy: {
      directives: {
        defaultsrc: [`'self'`], //Allows resources from only the same origin
        imgSrc: [`'self'`, 'data:', 'apollo-server-landing-page.cdn.apollographql.com'], //Allow images from the same origin, data URLs (for inline images), and a specific external CDN
        scriptSrc: [`'self'`, `'nonce-<random-nonce>'`], // Allow scripts from the same origin and those with a specific nonce value (for inline scripts)
        manifestSrc: [`'self'`, 'apollo-server-landing-page.cdn.apollographql.com'], // Allow web app manifests from the same origin and a specific external CDN
        frameSrc: [`'self'`, 'sandbox.embed.apollographql.com'], // Allow iframes (frames) from the same origin and a specific external source
      },
    },
    noSniff: true, //PRotects against MIME sniffing
    hidePoweredBy: true, //Hides the server technology used.
    xssFilter: true, //Adds a protection layer against XSS attacks.
    hsts: true, //Ensures secure HTTPS connections
  }),
)

app.use(httpLogger)

app.get('/', (_req: Request, res: Response) => {
  res.send('Welcome to WIKI SERVICE')
})

app.all('*', (req, _) => {
  logger.warn('Not found URL: ' + req.url)
  throw new NotFoundError('No url found')
})

export default app

RegisterRoutes(app)
