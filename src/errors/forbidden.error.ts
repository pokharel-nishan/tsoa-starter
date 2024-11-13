import { HTTP_ERROR_MESSAGES } from '../config/message.config'
import { CustomError } from './custom.error'

export class ForbiddenError extends CustomError {
  constructor(message: string = HTTP_ERROR_MESSAGES.FORBIDDEN) {
    super(message)
    this.statusCode = 403
    this.message = message
    Object.setPrototypeOf(this, ForbiddenError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
