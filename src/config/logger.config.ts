import pino from 'pino'
import { pinoHttp } from 'pino-http'
import env from './env.config'

const logger = pino({
  level: env.LOG_LEVEL || env.isDev ? 'debug' : 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS: dd-mm-yyyy HH:MM:ss',
      colorize: true,
      singleLine: true,
      levelFirst: true,
    },
  },
})

const httpLogger = pinoHttp({
  logger,
  level: env.LOG_LEVEL,
  serializers: {
    req(req) {
      return {
        method: req.method,
        url: req.url,
      }
    },
    res(res) {
      return {
        statusCode: res.statusCode,
      }
    },
  },
})

export { logger, httpLogger }
