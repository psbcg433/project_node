Here's the reorganized README.md with the project structure moved after the installation section:

# File Upload Service with Cloudinary Integration

## Setup Instructions

### 1. Clone the Repository
```bash
git clone --no-checkout --filter=blob:none https://github.com/psbcg433/project_node.git
cd project_node
git sparse-checkout init --cone
git sparse-checkout set 05_node_fileupload
git checkout
cd 05_node_fileupload
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create `.env` file:
```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4. Start the Server
```bash
node server.js
```
or for development with nodemon:
```bash
npm run dev
```

## Project Structure

```
05_node_fileupload/
├── uploads/          # Temporary upload storage (auto-created)
├── app.js            # Main application logic (routes, middleware)
├── server.js         # Server entry point (port configuration)
├── .env              # Environment configuration
├── .gitignore        # Git ignore rules
└── package.json      # Project dependencies and scripts
```

## API Endpoints

| Method | Endpoint | Description | Required Fields | cURL Example |
|--------|----------|-------------|-----------------|--------------|
| POST | `/upload` | Upload image file | `file` (image) | `curl -X POST -F "file=@test.jpg" http://localhost:3000/upload` |
| GET | `/` | Server status | - | `curl http://localhost:3000` |

## Example Requests

### 1. Upload an Image
```bash
curl -X POST -F "file=@profile.jpg" http://localhost:3000/upload
```

**Response:**
```json
{
  "message": "File uploaded successfully",
  "url": "https://res.cloudinary.com/demo/image/upload/v123/profile.jpg",
  "public_id": "uploads/profile_abc123"
}
```

### 2. Check Server Status
```bash
curl http://localhost:3000
```
**Response:** `File Upload Service Running`

## Key Features

- Secure file handling with Multer middleware
- Cloudinary CDN integration
- Automatic cleanup of temporary files
- Environment-based configuration
- Comprehensive error handling

## Error Responses

| Status | Error Type | Example Message |
|--------|------------|------------------|
| 400 | No file | `"No file uploaded."` |
| 400 | Invalid type | `"Only image files allowed!"` | 
| 500 | Server error | `"Upload failed"` |

Note: The server runs on port 3000 by default (configurable in server.js)