import app from './app'
import env from './config/env.config'
import { logger } from './config/logger.config'
import { connectDB, disconnectDb } from './database/connection.database'

/*
---------------------------
--Initlize Express Server--
---------------------------
*/
;(() => {
  logger.info(`Application Starting on process ID: ${process.pid}`)

  const server = app.listen(env.PORT, env.HOST, async () => {
    await connectDB()

    logger.info(`
      ============================    
      -------Server Started!------
        Port:${env.PORT}    
        Host:${env.HOST}
        Environment: ${env.NODE_ENV}
      ============================
`)
  })

  server.keepAliveTimeout = 70 * 1000 + 1000
  server.headersTimeout = 70 * 1000 + 2000

  const exit = async (code: 0 | 1) => {
    server.close()
    await disconnectDb()
    process.exit(code)
  }

  // Handle termination signals (SIGTERM, SIGINT)
  ;['SIGTERM', 'SIGINT'].forEach((event) => {
    process.on(event, () => {
      logger.info(`Received ${event}. Shutting down gracefully...`)
      exit(0)
    })
  })

  // Handle uncaught exceptions and unhandled rejections
  ;['uncaughtException', 'unhandledRejection'].forEach((event) => {
    process.on(event, (error, source) => {
      logger.error(`${event}: ${error}`)
      logger.debug(`Source: ${source}`)
      exit(1)
    })
  })
})()
