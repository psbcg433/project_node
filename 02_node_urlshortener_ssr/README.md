# URL Shortener (Server-Side Rendered)

A simple **URL Shortener** built using **Node.js**, **Express.js**, and **MongoDB** with **Server-Side Rendering (SSR)**.

## 📂 Project Structure

```
02_NODE_URLSHORTENER_SSR/
│── db/
│   └── conn.js            # Database connection file
│── models/
│   └── urlshortener.js    # URL Shortener Mongoose model
│── public/
│   ├── homepage.css       # Stylesheet for the homepage
│   ├── homepage.ejs       # Homepage template (EJS)
│── routers/
│   ├── app.js             # Express app setup
│   ├── page.routes.js     # Routes for rendering pages
│   ├── url.routes.js      # Routes for handling URL shortening
│── server.js              # Entry point of the application
│── package.json           # Project dependencies and scripts
│── package-lock.json      # Lock file for dependencies
│── README.md              # Project documentation
```

## 🚀 Installation & Setup

1. **Clone the Repository**
   ```sh
   git clone --no-checkout --filter=blob:none https://github.com/psbcg433/project_node.git
   cd project_node
   git sparse-checkout init --cone
   git sparse-checkout set 02_node_urlshortener_ssr
   git checkout
   cd 02_node_urlshortener_ssr
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Create a `.env` File**
   Inside the root folder, create a `.env` file and add:
   ```env
   PORT=3000
   DB_URL=mongodb://localhost:27017/your_database_name
   DB_NAME=your_database_name
   ```

4. **Start the Server**
   ```sh
   npm start
   ```
   The app should now be running on `http://localhost:3000/`

## 🛠️ API Endpoints

### 1️⃣ Shorten a URL
   **POST** `/url`
   - **Body:** `{ "originalURL": "https://example.com" }`
   - **Response:** `{ "success": true, "shortID": "abcd1234" }`

### 2️⃣ Redirect to Original URL
   **GET** `/:shortID`
   - Redirects to the original URL associated with `shortID`

### 3️⃣ Render Home Page
   **GET** `/`
   - Renders the homepage listing all shortened URLs

## 👤 Author
- **GitHub:** [psbcg433](https://github.com/psbcg433)

---
Happy coding! 🚀

