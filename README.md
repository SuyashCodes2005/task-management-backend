# Task Management Backend API

## Project Overview

A secure Task Management Backend built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Mongoose.

This project allows users to:

- Register and Login
- Authenticate using JWT
- Create Tasks
- View Tasks
- Update Tasks
- Delete Tasks

---

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs
- Postman

---

## Features

### Authentication Module

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Token Generation
- Protected Routes

### Task Management

- Create Task
- Get All Tasks
- Get Task By ID
- Update Task
- Delete Task

### Additional Fields

- Status
- Due Date
- Priority
- Category

---

## Database Schema

### User Collection

```js
{
  name: String,
  email: String,
  password: String
}
```

### Task Collection

```js
{
  title: String,
  description: String,
  status: String,
  dueDate: Date,
  priority: String,
  category: String,
  user: ObjectId
}
```

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

### Tasks

POST /api/tasks

GET /api/tasks

GET /api/tasks/:id

PUT /api/tasks/:id

DELETE /api/tasks/:id

---

## Authentication Flow

1. User Registers
2. Password is hashed using bcrypt
3. User logs in
4. JWT token generated
5. Token sent in Authorization Header
6. Protected APIs accessed

---

## Environment Variables

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## Installation

```bash
git clone <repository-url>

npm install

npm run dev
```

---

## Testing

All APIs tested using Postman.

---

## Author

Suyash