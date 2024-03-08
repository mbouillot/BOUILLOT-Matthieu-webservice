
const jwt = require('jsonwebtoken');
require('dotenv').config();



module.exports = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        // Autoriser l'accès pour les invités
        return next();
    }

    jwt.verify(token, process.env.SECRETKEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Échec de l\'authentification du token' });
        }

        req.user = decoded;
        next();
    });
};

