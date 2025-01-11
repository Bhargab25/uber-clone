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
```

## /users/profile

### Description
This endpoint is used to get the profile of the authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The authentication token of the user.

### Response
- `200 OK`: The user profile was successfully retrieved. The response will include a JSON object with the user profile.

### Status Codes
- `200 OK`: User profile successfully retrieved.
- `401 Unauthorized`: Authentication token is missing or invalid.

### Example Request
```
GET /users/profile HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4b8a",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

## /users/logout

### Description
This endpoint is used to log out the authenticated user.

### Method
`GET`

### Headers
- `Authorization` (string, required): The authentication token of the user.

### Response
- `200 OK`: The user was successfully logged out.

### Status Codes
- `200 OK`: User successfully logged out.
- `401 Unauthorized`: Authentication token is missing or invalid.

### Example Request
```
GET /users/logout HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
```json
{
  "message": "User successfully logged out"
}
```

## /captains/register

### Description
This endpoint is used to register a new captain.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object with the following properties:
  - `firstname` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastname` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 5 characters long.
- `vehicle`: An object with the following properties:
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of 'Car', 'bike', 'auto'.

### Response
- `201 Created`: The captain was successfully created. The response will include a JSON object with the following fields:
  - `token`: The authentication token for the captain.
  - `captain`: The created captain object.

### Status Codes
- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Validation error. The response will include a JSON object with the validation errors.

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

## /captains/login

### Description
This endpoint is used to log in an existing captain.

### Method
`POST`

### Request Body
The request body should be a JSON object containing the following fields:
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 5 characters long.

### Response
- `200 OK`: The captain was successfully logged in. The response will include a JSON object with the following fields:
  - `token`: The authentication token for the captain.
  - `captain`: The logged-in captain object.

### Status Codes
- `200 OK`: Captain successfully logged in.
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
  "captain": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "Car"
    }
  }
}
```

## /captains/profile

### Description
This endpoint is used to get the profile of the authenticated captain.

### Method
`GET`

### Headers
- `Authorization` (string, required): The authentication token of the captain.

### Response
- `200 OK`: The captain profile was successfully retrieved. The response will include a JSON object with the captain profile.

### Status Codes
- `200 OK`: Captain profile successfully retrieved.
- `401 Unauthorized`: Authentication token is missing or invalid.

### Example Request
```
GET /captains/profile HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
```json
{
  "_id": "60c72b2f9b1e8b001c8e4b8a",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "Car"
  }
}
```

## /captains/logout

### Description
This endpoint is used to log out the authenticated captain.

### Method
`GET`

### Headers
- `Authorization` (string, required): The authentication token of the captain.

### Response
- `200 OK`: The captain was successfully logged out.

### Status Codes
- `200 OK`: Captain successfully logged out.
- `401 Unauthorized`: Authentication token is missing or invalid.

### Example Request
```
GET /captains/logout HTTP/1.1
Host: example.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Example Response
```json
{
  "message": "Captain successfully logged out"
}
```
