const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('./controllers/authController');
const jwt = require('jsonwebtoken');

// Middleware for protecting routes
const auth = (req, res, next) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

// Define routes
router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/me', auth, getMe);

// Optional: Route for server-side logout (if needed for session management)
router.post('/auth/logout', auth, (req, res) => {
    // Implement server-side session invalidation or other logic if needed
    res.json({ msg: 'Logout successful' });
});

module.exports = router;
