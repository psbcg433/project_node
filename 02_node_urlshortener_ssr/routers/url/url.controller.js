import URLMODEL from "../../models/urlshortener.js";

class UrlController {
    static async createShortURL(req, res) {
        try {
            const generateURL = await URLMODEL.generateShortID(req.body.originalURL);
            res.status(201).json(generateURL); 
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }

    static async redirectToURL(req, res) {
        try {
            const originalURL = await URLMODEL.getOriginalURL(req.params.shortID);
            
            if (!originalURL) {
                return res.status(404).json({ success: false, message: "Short URL not found." });
            }

            res.redirect(302, originalURL); 
        } catch (err) {
            res.status(400).json({ success: false, message: err.message });
        }
    }
}

export default UrlController;
