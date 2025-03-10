import URLMODEL from "../../models/urlshortener.js";

class UrlController {
    static async createShortURL(req, res) {
        try {
            const generateURL = await URLMODEL.generateShortID(req.body.originalURL);
            // res.status(201).json(generateURL); 
            res.redirect(302, "/");
           
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

  
}

export default UrlController;
