import { HTTP_ERROR_MESSAGES } from '../config/message.config'
import { CustomError } from './custom.error'

export class BadRequestError extends CustomError {
  constructor(message: string = HTTP_ERROR_MESSAGES.BAD_REQUEST) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, BadRequestError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
