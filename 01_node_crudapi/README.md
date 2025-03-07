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

1. **Clone the repository (only the `01_node_crudapi` folder)**
   ```sh
   git clone --no-checkout --filter=blob:none https://github.com/psbcg433/project_node.git
   cd project_node
   git sparse-checkout init --cone
   git sparse-checkout set 01_node_crudapi
   git checkout
   cd 01_node_crudapi
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` file** in the root directory and add the following variables:
   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/studentsDB
   ```

4. **Start the server**
   - In **development mode** (auto-reloads on changes):
     ```sh
     npm run dev
     ```
   - Or start normally:
     ```sh
     node server.js
     ```

## API Endpoints

### Create a new student
**POST** `/students`
```json
{
  "name": "Basudev Sai Krishna",
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
  "name": "Radha Krishnam",
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
psbcg433
