import express, { urlencoded } from 'express';
import cookieParser from "cookie-parser";
import path from 'path';
import { fileURLToPath } from 'url';

import pageRouter from './routes/pages.routes.js';
import authRouter from './routes/auth.routes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); 
app.use(urlencoded({ extended: true })); 
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.static(path.resolve(__dirname, 'public'))); 


app.use('/', pageRouter);
app.use('/api/auth', authRouter);



export default app;
