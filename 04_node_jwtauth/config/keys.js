import { generateKeyPairSync } from "crypto";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve paths relative to the project root
const keysDir = path.resolve(__dirname, "..", "config"); // Go up one level to the project root
const privateKeyPath = path.resolve(keysDir, "private.pem");
const publicKeyPath = path.resolve(keysDir, "public.pem");

const generateKeys = async () => {
  if (!fs.existsSync(privateKeyPath) || !fs.existsSync(publicKeyPath)) {
    const { privateKey, publicKey } = generateKeyPairSync("rsa", {
      modulusLength: 2048,
      publicKeyEncoding: { type: "pkcs1", format: "pem" },
      privateKeyEncoding: {
        type: "pkcs1",
        format: "pem",
        cipher: "aes-256-cbc",
        passphrase: process.env.PRIVATE_KEY_PASSPHRASE || "secret",
      },
    });

    // Ensure the config directory exists
    if (!fs.existsSync(keysDir)) {
      fs.mkdirSync(keysDir, { recursive: true });
    }

    fs.writeFileSync(privateKeyPath, privateKey);
    fs.writeFileSync(publicKeyPath, publicKey);
    console.log("🔑 Public and private keys generated!");
  }
};

export default generateKeys;