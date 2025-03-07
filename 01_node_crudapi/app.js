import express from 'express';
import studentRouter from './routes/student.routes.js';

// Initialize Express app
const app = express();

// Load Middleware
app.use(express.json());

// Load Routes
app.use("/students", studentRouter);

export default app;
