import express from 'express';
import urlRouter from './routers/url/url.routes.js';
import UrlController from './routers/url/url.controller.js'; 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//registering routes
app.use('/api/url', urlRouter);
app.get('/:shortID', UrlController.redirectToURL);

export default app;