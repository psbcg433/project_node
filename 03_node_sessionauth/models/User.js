import mongoose from "mongoose";
import { hashPassword, comparePassword } from "../utils/helper.js";

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Static method for user registration
userSchema.statics.registerUser = async function (email, password) {
    const existingUser = await this.findOne({ email });
    if (existingUser) {
        throw new Error("Email already in use");
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new this({ email, password: hashedPassword });
    return await newUser.save();
};

// Static method for authentication
userSchema.statics.authenticateUser = async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("Email not registered");
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        throw new Error("Incorrect Password");
    }
    return user;
};

const User = mongoose.model("User", userSchema);

export default User;
