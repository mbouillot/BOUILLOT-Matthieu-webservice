// authController.js

const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');

exports.login = async (req, res) => {
    try {
        // Récupérer l'email de l'utilisateur à partir du corps de la requête
        const { email } = req.body;

        // Vérifier si l'utilisateur existe dans la base de données
        const user = await User.findOne({ email });

        // Si l'utilisateur n'existe pas, renvoyer une erreur
        if (!user) {
            return res.status(401).json({ message: "L'utilisateur n'existe pas" });
        }

        // Générer un token JWT avec les informations de l'utilisateur
        const token = jwt.sign(
            { 
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.SECRETKEY,
            { expiresIn: '1h' }
        );

        // Renvoyer le token JWT en réponse
        res.json({ token });
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de la connexion :', error);
        res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
};


