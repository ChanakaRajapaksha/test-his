const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: "Access token is missing or invalid" });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: "Token is invalid" });
        req.user = user; 
        next();
    });
};
