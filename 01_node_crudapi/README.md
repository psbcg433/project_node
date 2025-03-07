# CRUD API with Express and MongoDB

## Description
This is a simple CRUD API built using Node.js, Express, and MongoDB with Mongoose. It allows users to perform Create, Read, Update, and Delete operations on a "Student" collection in a MongoDB database.

## Features
- Create a new student
- Get all students
- Get a student by ID
- Update a student by ID
- Delete a student by ID

## Project Structure
```
crudapi/
├── db/
│   ├── conn.js                 # Database connection file
├── models/
│   ├── students.js             # Mongoose schema and model for students
├── routes/
│   ├── student.controller.js   # Controller for handling student routes
│   ├── student.routes.js       # Express routes for student API
├── app.js                      # Express app setup
├── server.js                   # Entry point of the application
├── package.json                # Project dependencies and scripts
├── .env                         # Environment variables (not included in repo)
```

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd crudapi
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017
   ```

4. Start the server in development mode:
   ```sh
   npm run watch
   ```
   or start normally:
   ```sh
   npm run dev
   ```

## API Endpoints

### Create a new student
**POST** `/students`
```json
{
  "name": "John Doe",
  "age": 20,
  "fees": 6000.75
}
```

### Get all students
**GET** `/students`

### Get a student by ID
**GET** `/students/:id`

### Update a student by ID
**PUT** `/students/:id`
```json
{
  "name": "Jane Doe",
  "age": 22
}
```

### Delete a student by ID
**DELETE** `/students/:id`

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## License
This project is licensed under the ISC License.

## Author
Your Name

