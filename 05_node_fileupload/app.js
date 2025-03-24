import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

// Verify environment variables
if (!process.env.CLOUDINARY_API_SECRET) {
    throw new Error('Missing Cloudinary API Secret in environment variables');
}

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define the upload directory
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const randomNumber = randomBytes(8).toString('hex');
        const date = new Date().toISOString().replace(/:/g, '-');
        const extension = path.extname(file.originalname);
        cb(null, `${randomNumber}-${date}${extension}`);
    }
});

// File filter to allow only image files
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({ storage, fileFilter });

// Upload route with Cloudinary integration
app.post('/upload', upload.single('file'), async (req, res, next) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    try {
        // Upload to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'uploads'
        });

        // Delete the file from local storage after upload
        fs.unlinkSync(req.file.path);

        res.send({
            message: 'File uploaded to Cloudinary successfully',
            url: result.secure_url,
            public_id: result.public_id
        });
    } catch (error) {
        // Pass the error to the error handling middleware
        next(error);
    }
});

// Unified error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);

    // Handle specific error types
    if (err instanceof multer.MulterError) {
        return res.status(400).send(err.message);
    }

    if (err.message === 'Only image files are allowed!') {
        return res.status(400).send(err.message);
    }

    if (err.message.includes('Cloudinary')) {
        return res.status(500).send('Error uploading file to Cloudinary');
    }

    // Generic error handler
    res.status(500).send('Something went wrong!');
});

export default app;