export class HttpError {
  constructor(statusCode, message, data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}

export class ValidationError {
  constructor(message) {
    if (!message || message.trim().length === 0) {
      throw new Error("Message is required");
    }

    if (arguments.length > 1) {
      throw new Error("Too many arguments");
    }

    this.message = message;
  }
}
