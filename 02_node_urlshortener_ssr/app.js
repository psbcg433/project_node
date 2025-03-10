import express from 'express';
import urlRouter from './routers/url/url.routes.js'; 
import pageRouter from './routers/pageroutes/pageRoutes.routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix for __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));  

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/url', urlRouter);
app.use('/', pageRouter);

export default app;
