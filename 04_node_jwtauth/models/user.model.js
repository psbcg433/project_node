import mongoose from "mongoose";
import { hashPassword, verifyPassword } from "../utils/helper.js";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }
    }
);

// Static method to register a new user
userSchema.statics.registerUser = async function (username, email, password) {
    if (!username || !email || !password) {
        throw new Error("All fields are required");
    }

    // Check if the email is already registered
    const checkExistingUser = await this.findOne({ email });
    if (checkExistingUser) {
        throw new Error('Email already registered');
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create the new user
    const newUser = await this.create({ username, email, password: hashedPassword });
    return newUser;
};

// Static method to check user credentials
userSchema.statics.checkUserCredentials = async function (email, password) {
    if (!email || !password) {
        throw new Error("Email and password are required");
    }

    // Find the user by email
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("Incorrect email");
    }

    // Verify the password
    const isPasswordValid = await verifyPassword(password, user.password);
    if (!isPasswordValid) {
        throw new Error("Incorrect password");
    }

    return user;
};

// Create the User model
const User = mongoose.model('User', userSchema);

export default User;