import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import passport from './config/passport.js'; 
import cors from 'cors';
import authRouter from './routes/auth/auth.routes.js';
import dotenv from 'dotenv';
const app = express();


//load environment varibales
dotenv.config();

// CORS configuration
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session store setup
const mongoStore = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    collectionName: 'sessions',
});

// Session middleware
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: mongoStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRouter);

export default app;
