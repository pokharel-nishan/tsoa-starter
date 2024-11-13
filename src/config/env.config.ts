import dotenv from 'dotenv'
import { cleanEnv, str, port, url, makeExactValidator } from 'envalid'
dotenv.config()
const isOptionalInProd = makeExactValidator((input) => {
  if (process.env.NODE_ENV === 'production') {
    if (input === undefined) return null
  }
  if (!input) throw new Error('This field is required')
  return input
})
const env = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] }),
  PORT: port({ default: 3000 }),
  CORS_DOMAINS: str(),
  HOST: str(),
  MONGO_URI: url(),
  LOG_LEVEL: str({
    desc: 'Log level for logger.',
    choices: ['', 'fatal', 'error', 'warn', 'info', 'debug', 'trace'],
    default: '',
  }),
  SECRET_KEY: str(),
  AWS_BUCKET_NAME: str(),
  AWS_REGION: str(),
  API_KEY: str(),
  AWS_ACCESS_KEY_ID: isOptionalInProd(),
  AWS_SECRET_ACCESS_KEY: isOptionalInProd(),
  AWS_SESSION_TOKEN: isOptionalInProd(),
})
export default env
