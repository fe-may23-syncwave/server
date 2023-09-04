/* eslint-disable @typescript-eslint/no-explicit-any */
interface ApiErrorData {
  [key: string]: any;
}

export class ApiError extends Error {
  status: number;
  errors: ApiErrorData;

  constructor(status: number, message: string, errors: ApiErrorData = {}) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static BadRequest(message: string, errors: ApiErrorData): ApiError {
    console.log('ApiError 400❌', message);
    return new ApiError(400, message, errors);
  }

  static Unauthorized(): ApiError {
    console.log('ApiError 401❌');
    return new ApiError(401, 'User is not authorized');
  }

  static NotFound(): ApiError {
    console.log('ApiError 404❌');
    return new ApiError(404, 'Not found');
  }
}
