import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto'; // Import crypto for decryption

// Resolve the path to the private key relative to the project root
const privateKeyPath = path.resolve(process.cwd(), 'config', 'private.pem');
const privateKeyEncrypted = fs.readFileSync(privateKeyPath, 'utf-8');

// Passphrase used to encrypt the key (store this in environment variables)
const passphrase = process.env.PRIVATE_KEY_PASSPHRASE || 'secret';

// Decrypt the private key
const privateKey = crypto.createPrivateKey({
    key: privateKeyEncrypted,
    format: 'pem',
    type: 'pkcs1',
    passphrase, // Passphrase used to encrypt the key
});

// Debugging: Log the decrypted private key
console.log("Decrypted Private Key:", privateKey.export({ format: 'pem', type: 'pkcs1' }));

export const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.checkUserCredentials(email, password);

        // Check if user exists
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email },
            privateKey, // Use the decrypted private key
            { algorithm: 'RS256', expiresIn: '1h' }
        );

        // Set the token in a cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: (process.env.NODE_ENV || 'development') === 'production', // Only set to true in production
            sameSite: (process.env.NODE_ENV || 'development') === 'production' ? 'Strict' : 'Lax',
        });

        // Redirect to dashboard
        res.status(200).redirect('/');
    } catch (error) {
        console.log("Error:", error);
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

export const userRegister = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await userModel.registerUser(username, email, password);
        console.log(newUser);
        res.status(201).redirect('/login');
    } catch (error) {
        console.error("Error:", error);

        // Handle specific errors
        if (error.code === 11000) { // MongoDB duplicate key error
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Handle validation errors
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }

        // Generic error
        res.status(400).json({ error: 'Failed to register user' });
    }
};


export const userLogout = (req, res) => {
    try {
        // Clear the token cookie
        res.clearCookie("token", {
            httpOnly: true,
            secure: (process.env.NODE_ENV || 'development') === 'production', // Match the same settings as the login cookie
            sameSite: (process.env.NODE_ENV || 'development') === 'production' ? 'Strict' : 'Lax',
        });

        // Redirect to the login page or home page
        res.status(200).redirect('/login');
    } catch (error) {
        console.log("Error during logout:", error);
        res.status(500).json({ message: 'Failed to logout' });
    }
};