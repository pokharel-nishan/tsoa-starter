import mongoose from 'mongoose'
import { logger } from '../config/logger.config'
import env from '../config/env.config'
import { CustomError } from '../errors'

const mongodbUrl: string = env.MONGO_URI

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(mongodbUrl)
    logger.info(`MongoDB connection open`)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error(`Failed to connect to MongoDB: ${err}`)
    throw new CustomError(err.message)
  }
}

export const disconnectDb = async (): Promise<void> => {
  try {
    await mongoose.disconnect()
    logger.info('MongoDb disconnected')
  } catch (err) {
    logger.error(`Failed to disconnect to MongoDB: ${err}`)
  }
}
