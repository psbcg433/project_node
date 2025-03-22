import express from 'express';
import { dashboardPage,displayLoginPage,displayRegisterPage } from '../controllers/pages.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const pageRouter = express.Router();

pageRouter.get('/',authMiddleware,dashboardPage)
pageRouter.get('/login',displayLoginPage)
pageRouter.get('/register',displayRegisterPage)


export default pageRouter;