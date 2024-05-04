// This class represents an API response object
class ApiResponse {
  // Constructor method to initialize the ApiResponse object
  constructor(statusCode, data, message = "Success") {
    // Store the HTTP status code of the response
    this.statusCode = statusCode;
    // Store the data payload of the response
    this.data = data;
    // Store a message describing the response, defaulting to "Success"
    this.message = message;
    // Determine if the response is successful based on the status code
    // Success is defined as a status code less than 400 (HTTP success range)
    this.success = statusCode < 400;
  }
}

export { ApiResponse };
