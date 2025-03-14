import express from 'express';
import passport from 'passport';
import { login, register, logout , getProfile} from './auth.controllers.js'

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', passport.authenticate('local'), login);
authRouter.get('/logout', logout);  
authRouter.get('/profile', getProfile);

export default authRouter;