# 03_NODE_SESSIONAUTH

## Project Overview
03_NODE_SESSIONAUTH is an authentication system built with Node.js and Express, utilizing Passport.js for session-based authentication. It follows a clean architecture, keeping business logic within models and helper functions separate for maintainability.

## Technologies Used
- **Node.js** - Backend runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing utility
- **express-session** - Session middleware for authentication
- **connect-mongo** - MongoDB store for session management
- **dotenv** - Environment variable management

## Directory Structure
```
03_NODE_SESSIONAUTH/
│-- config/
│   ├── dbConnect.js   # Database connection setup
│   ├── passport.js    # Passport authentication setup
│
│-- models/
│   ├── User.js        # User schema and authentication logic
│
│-- routes/auth/
│   ├── auth.controller.js # Controller for authentication routes
│   ├── auth.routes.js     # Authentication API routes
│
│-- utils/
│   ├── helper.js      # Helper functions (password hashing, etc.)
│
│-- .env              # Environment variables
│-- app.js            # Middleware setup
│-- server.js         # Entry point, loads environment & DB before starting server
│-- package.json      # Project dependencies
```

## Setup Instructions
### 1. Clone the Repository
```sh
git clone --no-checkout --filter=blob:none https://github.com/psbcg433/project_node.git
cd project_node
git sparse-checkout init --cone
git sparse-checkout set 03_node_sessionauth
git checkout
cd 03_node_sessionauth
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 4. Start the Server
```sh
npm start
```

## API Endpoints
### Authentication Routes (`/api/auth`)
| Method | Endpoint    | Description |
|--------|------------|-------------|
| POST   | /register  | Register a new user |
| POST   | /login     | Log in with email & password |
| GET    | /logout    | Log out and destroy session |
| GET    | /profile   | Get authenticated user profile |

### Example Usage
#### Login Request (Using Fetch in Browser Console)
```js
fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'prashnik20@gmail.com', password: '123456' }),
    credentials: 'include'
})
.then(response => response.json())
.then(data => console.log(data));
```

## License
This project is licensed under the MIT License.

