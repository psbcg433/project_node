import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/User.js";

console.log("✅ Passport Local Strategy is being registered...");

const localStrategyCallback = async (email, password, done) => {
    try {
        console.log(`🔍 Authenticating user: ${email}`);
        const user = await User.authenticateUser(email, password);
        console.log("✅ Authentication successful");
        return done(null, user);
    } catch (error) {
        console.error("❌ Authentication failed:", error.message);
        return done(null, false, { message: error.message });
    }
};

// Define Local Strategy
passport.use(new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    localStrategyCallback
));

// Serialize user ID into session
passport.serializeUser((user, done) => {
    console.log(`🔐 Serializing user: ${user.id}`);
    done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        console.log(`🔓 Deserializing user: ${user.email}`);
        done(null, user);
    } catch (error) {
        console.error("❌ Error in deserialization:", error);
        done(error);
    }
});

export default passport;
