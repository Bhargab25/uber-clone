# API Documentation

## /users/register

### Description
This endpoint is used to register a new user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object with the following properties:
  - `firstname` (string, required): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

### Response
- `201 Created`: The user was successfully created. The response will include a JSON object with the following fields:
  - `token`: The authentication token for the user.
  - `user`: The created user object.

### Status Codes
- `201 Created`: User successfully registered.
- `400 Bad Request`: Validation error. The response will include a JSON object with the validation errors.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## /users/login

### Description
This endpoint is used to log in an existing user.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 5 characters long.

### Response
- `200 OK`: The user was successfully logged in. The response will include a JSON object with the following fields:
  - `token`: The authentication token for the user.
  - `user`: The logged-in user object.

### Status Codes
- `200 OK`: User successfully logged in.
- `400 Bad Request`: Validation error. The response will include a JSON object with the validation errors.
- `401 Unauthorized`: Invalid email or password.

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
