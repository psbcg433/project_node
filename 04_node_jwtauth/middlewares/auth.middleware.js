import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

// Resolve the path to the public key relative to the project root
const publicKeyPath = path.resolve(process.cwd(), 'config', 'public.pem');
// Read the public key
const publicKey = fs.readFileSync(publicKeyPath, 'utf-8');
export const authMiddleware = (req, res, next) => {
    // Get the token from the cookies
    const token = req.cookies.token;
    // If no token is present, redirect to the login page
    if (!token) {
        return res.status(401).redirect('/login');
    }
    // Verify the token
    jwt.verify(token, publicKey, { algorithms: ['RS256'] }, (err, decoded) => {
        if (err) {

            return res.status(401).json({ message: 'Failed to verify token' });
        }
       req.user = decoded;
        next();
    });
};