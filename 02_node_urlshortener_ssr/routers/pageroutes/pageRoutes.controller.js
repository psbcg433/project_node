
import { fileURLToPath } from "url";
import path from "path";
import URLMODEL from "../../models/urlshortener.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



class PageRoutesController {
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

    static async renderHomePage(req, res) {
        try {
            const urls = await URLMODEL.find({});
            res.render(path.join(__dirname, "../../public/homepage.ejs"), { urls });
        } catch (err) {
            res.status(500).json({ success: false, message: err.message });
        }
    }
}


export default PageRoutesController;