import User from '../../models/User.js';

export const register = async (req, res) => {
    const { email, password } = req.body;
    try {
        await User.registerUser(email, password);
        return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    res.json({ message: 'Login Successful', user: req.user });
};

export const logout = async (req, res) => {
    req.logout(err => {
        if (err) {
            return res.status(500).json({ error: 'Failed to logout' });
        }
        res.json({ message: 'Logout successful' });
    });
};

export const getProfile = (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json({ message: 'Profile fetched successfully', user: req.user });
};
