# Task Management Backend API

## Project Overview

A secure and scalable Task Management Backend built using Node.js, Express.js, MongoDB Atlas, JWT Authentication, and Mongoose.

The application allows users to manage tasks efficiently with authentication, task filtering, dashboard statistics, productivity analytics, and notification features.

---

## Live Deployment

Backend URL:

https://task-management-backend-rlun.onrender.com

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* Postman
* Render

---

## Features

### Authentication Module

* User Registration
* User Login
* Password Hashing using bcryptjs
* JWT Token Generation
* Protected Routes

### Task Management

* Create Task
* Get All Tasks
* Get Task By ID
* Update Task
* Delete Task

### Advanced Task Features

* Filter Tasks by Status
* Filter Tasks by Priority
* Filter Tasks by Category
* Sort Tasks
* Search Tasks

### Dashboard Statistics

Provides summary information including:

* Total Tasks
* Completed Tasks
* Pending Tasks
* In Progress Tasks

### Productivity Analytics

Provides analytics such as:

* Tasks by Status
* Tasks by Priority
* Tasks by Category
* Productivity Overview

### Notification System

Returns upcoming tasks that are due within a specified time period.

### Additional Task Fields

* Status
* Due Date
* Priority
* Category

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

### Dashboard

GET /api/dashboard/stats

### Analytics

GET /api/analytics

### Notifications

GET /api/notifications

---

## Authentication Flow

1. User Registers
2. Password is Hashed using bcryptjs
3. User Logs In
4. JWT Token Generated
5. Token Sent in Authorization Header
6. Protected APIs Accessed

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

## Project Structure

```text
docs/
├── architecture-diagram.png
├── Task-Management-Backend-Phase1.postman_collection.json
└── Task-Management-Backend-Phase2.postman_collection.json
```

---

## API Documentation

Postman Collections:

* docs/Task-Management-Backend-Phase1.postman_collection.json
* docs/Task-Management-Backend-Phase2.postman_collection.json

---

## Architecture Diagram

Architecture Diagram available in:

docs/architecture-diagram.png

---

## Deployment

Application deployed on Render.

Live URL:

https://task-management-backend-rlun.onrender.com

---

## Testing

All APIs have been tested using Postman.

---

## Author

Suyash
