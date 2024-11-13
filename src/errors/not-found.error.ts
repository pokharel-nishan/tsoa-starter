import { HTTP_ERROR_MESSAGES } from '../config/message.config'
import { CustomError } from './custom.error'

export class NotFoundError extends CustomError {
  constructor(message: string = HTTP_ERROR_MESSAGES.NOT_FOUND) {
    super(message)
    this.message = message
    this.statusCode = 404
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
