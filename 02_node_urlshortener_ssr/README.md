# URL Shortener (Server-Side Rendered)

## 📌 Project Overview
This is a **Node.js URL Shortener** that allows users to shorten long URLs and redirect them using a short ID. The project is built using **Express.js**, **MongoDB**, and **EJS** for server-side rendering.

## 🚀 Features
- Generate a short URL for any given long URL.
- Redirect users to the original URL when visiting the short link.
- Track the number of clicks and visit history.
- Server-Side Rendering (SSR) using **EJS**.
- MongoDB for storing URL mappings.

---

## 🏗️ Project Structure
```
02_NODE_URLSHORTENER_SSR/
│── db/
│   ├── conn.js           # Database connection setup
│
│── models/
│   ├── urlshortener.js   # Mongoose schema and methods for URL storage
│
│── public/
│   ├── homepage.css      # Styles for the home page
│   ├── homepage.ejs      # EJS template for rendering URLs
│
│── routers/
│   ├── page.routes.js    # Routes for rendering the homepage & redirection
│   ├── url.routes.js     # Routes for handling URL shortening
│
│── server.js             # Entry point - initializes the server
│── app.js                # Main Express app setup
│── package.json          # Project dependencies and scripts
│── README.md             # Documentation (this file)
```

---

## 🛠️ Installation & Setup
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/url-shortener-ssr.git
cd url-shortener-ssr
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```
MONGO_URI=your_mongodb_connection_string
DB_NAME=urlshortener_db
PORT=3000
```

### 4️⃣ Start the Server
```bash
npm start
```
The app will run at **http://localhost:3000/**.

---

## 🔥 API Endpoints
### 1️⃣ Shorten a URL
**POST** `/api/url`
```json
{
  "originalURL": "https://example.com"
}
```
_Response:_
```json
{
  "success": true,
  "shortID": "abc123",
  "message": "Short URL created successfully."
}
```

### 2️⃣ Redirect to Original URL
**GET** `/:shortID`
- Redirects to the original URL associated with `shortID`.

### 3️⃣ Render Homepage
**GET** `/`
- Displays a list of all shortened URLs.

---

## 📌 Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **EJS** - Server-side templating
- **NanoID** - Short URL generation

---


