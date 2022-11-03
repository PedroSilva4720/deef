export class InternalServerError extends Error {
  statusCode: number;
  constructor(message) {
    super(message);
    this.name = 'InternalSeverError';
    this.statusCode = 501;
  }
}

export interface IInternalServerError {
  statusCode: number;
  message: string;
}
