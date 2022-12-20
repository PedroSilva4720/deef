export class InternalServerError extends Error {
  statusCode: number;
  constructor(message, statusCode = 501) {
    super(message);
    this.statusCode = statusCode;
  }
}

export interface IInternalServerError {
  statusCode: number;
  message: string;
}
