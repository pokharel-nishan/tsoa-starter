import { HTTP_ERROR_MESSAGES } from '../config/message.config'
import { CustomError } from './custom.error'

export class ColflictError extends CustomError {
  constructor(message: string = HTTP_ERROR_MESSAGES.CONFLICT) {
    super(message)
    this.statusCode = 409
    this.message = message
    Object.setPrototypeOf(this, ColflictError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
