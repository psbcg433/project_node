import mongoose from "mongoose";
import { nanoid } from 'nanoid';


const urlShortenerSchema = new mongoose.Schema(
  {
    shortID: { type: String, required: true, unique: true, index: true },
    redirectURL: { type: String, required: true },
    visitHistory: [
      {
        timeStamp: { type: Date, default: Date.now },
      }
    ],
    clicks: { type: Number, default: 0 }
  },
  { timestamps: true }
);


//method to generate shortID

urlShortenerSchema.statics.generateShortID = async function (originalURL) {
  if (!originalURL || originalURL.trim() === "") {
    throw new Error("URL field can't be empty.");
  }

  // ✅ Validate URL format
  const urlRegex = /^(https?:\/\/)?([\w\d-]+)\.([a-z]{2,})([\w\d-./?&%=]*)?$/i;
  if (!urlRegex.test(originalURL)) {
    throw new Error("Invalid URL format.");
  }

  try {
    const shortID = nanoid(12);
    await this.create({ shortID, redirectURL: originalURL });
    return { success: true, shortID, message: "Short URL created successfully." };
  } catch (error) {
    throw new Error(`Error creating short URL: ${error.message}`);
  }
};

//method to get original URL

urlShortenerSchema.statics.getOriginalURL = async function (shortID) {
  if (!shortID || shortID.trim() === "") {
    throw new Error("Short ID field can't be empty.");
  }
  try {
    const url = await this.findOne({shortID})
    if(!url){
      throw new Error("Short URL not found.")
    }
    else
    {
      url.clicks += 1;
      url.visitHistory.push({timeStamp:Date.now()})
      await url.save()
      return url.redirectURL
    }
  }
  catch (error) {
    throw new Error(`Error fetching original URL: ${error.message}`);
  }
}

const URLMODEL = mongoose.model("URL", urlShortenerSchema);

export default URLMODEL;
