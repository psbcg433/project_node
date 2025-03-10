import express from 'express';
import UrlController from './url.controller.js';

const urlRouter = express.Router();

urlRouter.post('/', UrlController.createShortURL);


export default urlRouter;
