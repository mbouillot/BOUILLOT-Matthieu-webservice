module.exports = (requiredRole) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentification requise' });
        }

        if (req.user.role === 'admin') {
            return next();
        }

        if (req.user.role === requiredRole) {
            return next();
        } else {
            return res.status(403).json({ message: 'Accès non autorisé' });
        }
    };
};
