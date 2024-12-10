# Express.js: Large JSON Request Body Parsing Issue

This repository demonstrates a common issue in Express.js applications where parsing large JSON request bodies fails silently. The error message is not very informative, making debugging difficult. This example shows the problem and a solution using `body-parser` to handle larger requests.

## Bug

The original code uses the built-in `express.json()` middleware, which has a default limit on the size of the request body.  When a larger JSON payload is sent, the request body is not parsed correctly, leading to unexpected behavior.

## Solution

The solution involves using the `body-parser` middleware to explicitly set the limit for the request body size. This allows the application to handle larger JSON payloads without issues.  The solution also provides more robust error handling.