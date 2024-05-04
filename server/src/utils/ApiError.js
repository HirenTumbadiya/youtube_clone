// Define a class `ApiError` that extends the built-in `Error` class
class ApiError extends Error {
    // Constructor method to initialize an ApiError object
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
      // Call the constructor of the parent class `Error`, passing the provided `message`
      super(message);
  
      // Store the HTTP status code of the error response
      this.statusCode = statusCode;
  
      // Store the data payload of the error response (set to null by default)
      this.data = null;
  
      // Store the message describing the error
      this.message = message;
  
      // Determine if the response is successful (set to false for errors)
      this.success = false;
  
      // Store any additional errors or error details (set to an empty array by default)
      this.errors = errors;
  
      // If a custom stack trace is provided, set it; otherwise, capture the stack trace
      if (stack) {
        this.stack = stack;
      } else {
        // Capture the stack trace of where the error occurred, excluding the constructor invocation
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  // Export the `ApiError` class for use in other modules
  export { ApiError };
  