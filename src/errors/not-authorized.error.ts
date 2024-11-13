import { HTTP_ERROR_MESSAGES } from '../config/message.config'
import { CustomError } from './custom.error'

export class NotAuthorizedError extends CustomError {
  constructor(message: string = HTTP_ERROR_MESSAGES.UNAUTHORIZED) {
    super(message)
    this.statusCode = 401
    this.message = message
    Object.setPrototypeOf(this, NotAuthorizedError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
