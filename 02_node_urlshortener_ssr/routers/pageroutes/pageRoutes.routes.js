import express from 'express';
import PageRoutesController from './pageRoutes.controller.js';

const pageRouter = express.Router();

pageRouter.get('/', PageRoutesController.renderHomePage);
pageRouter.get('/:shortID', PageRoutesController.redirectToURL);


export default pageRouter;
