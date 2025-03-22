Sure! Here's the updated `README.md` file with the API endpoints presented in a tabular format:

---

# Node.js JWT Authentication Project

This project is a Node.js application that implements JWT (JSON Web Token) authentication. It uses Express for routing, Mongoose for MongoDB interactions, and EJS for rendering views. The application includes user registration, login, and logout functionality, with protected routes using JWT-based authentication.

## Features

- **User Registration**: Users can register with a username, email, and password.
- **User Login**: Users can log in using their email and password. Successful login generates a JWT.
- **Protected Routes**: Certain routes (e.g., dashboard) are protected and require a valid JWT.
- **Password Hashing**: User passwords are securely hashed using `bcryptjs`.
- **JWT Authentication**: Tokens are signed using RSA keys (public/private) for enhanced security.
- **Logout**: Users can log out, which clears the JWT cookie.

## Directory Structure

```
04_node_jwtauth/
├── config/
│   ├── db.js
│   ├── keys.js
│   ├── private.pem
│   └── public.pem
├── controllers/
│   ├── auth.controller.js
│   └── pages.controller.js
├── middlewares/
│   └── auth.middleware.js
├── models/
│   └── user.model.js
├── node_modules/
├── public/
│   ├── auth.style.css
│   └── dashboard.style.css
├── routes/
│   ├── auth.routes.js
│   └── pages.routes.js
├── utils/
│   └── helper.js
├── views/
│   ├── dashboard.ejs
│   ├── login.ejs
│   └── register.ejs
├── .env
├── app.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Installation

### Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone --no-checkout --filter=blob:none https://github.com/psbcg433/project_node.git
   cd project_node
   git sparse-checkout init --cone
   git sparse-checkout set 04_node_jwtauth
   git checkout
   cd 04_node_jwtauth
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   - Create a `.env` file in the root directory and add the following:
     ```
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     SESSION_SECRET=your_secret_key
     PRIVATE_KEY_PASSPHRASE=your_passphrase_here
     ```

4. **Start the Server**:
   ```bash
   npm start
   ```

## API Endpoints

| HTTP Method | Endpoint          | Description                          | Request Body/Parameters               | Response                              |
|-------------|-------------------|--------------------------------------|---------------------------------------|---------------------------------------|
| **GET**     | `/`               | Render the dashboard page (protected)| Requires valid JWT in cookies         | Renders `dashboard.ejs`               |
| **GET**     | `/login`          | Render the login page                | None                                  | Renders `login.ejs`                   |
| **GET**     | `/register`       | Render the register page             | None                                  | Renders `register.ejs`                |
| **POST**    | `/api/auth/login` | Authenticate user and generate JWT   | `{ email: string, password: string }` | Sets JWT cookie, redirects to `/`     |
| **POST**    | `/api/auth/register` | Register a new user               | `{ username: string, email: string, password: string }` | Redirects to `/login` |
| **GET**     | `/api/auth/logout` | Log out the user                    | None                                  | Clears JWT cookie, redirects to `/login` |

## Usage

- **Register**: Visit `/register` to create a new account.
- **Login**: Visit `/login` to log in with your credentials.
- **Dashboard**: After logging in, you'll be redirected to the dashboard (`/`).
- **Logout**: Visit `/logout` to log out and clear the session.

## Dependencies

- **Express**: Web framework for Node.js.
- **Mongoose**: MongoDB object modeling.
- **bcryptjs**: Password hashing.
- **jsonwebtoken**: JWT generation and verification.
- **dotenv**: Environment variable management.
- **EJS**: Templating engine for rendering views.
- **cookie-parser**: Parse HTTP cookies.

## Scripts

- `npm start`: Start the server.
- `npm run watch`: Start the server with nodemon for development.


