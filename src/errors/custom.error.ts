export class CustomError extends Error {
  statusCode = 400
  constructor(message: string) {
    super(message)
    this.message = message
    Object.setPrototypeOf(this, CustomError.prototype)
  }

  serializeErrors() {
    return [{ message: this.message }]
  }
}
