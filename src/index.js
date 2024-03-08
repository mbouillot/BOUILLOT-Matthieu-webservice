// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../config/database');
const projectRoutes = require('./routes/projectRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/projects', projectRoutes);
app.use('/roles', roleRoutes);
app.use('/users', userRoutes);
app.use('/skills', skillRoutes);
app.use('/login', authRoutes); 

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
    console.log('Connecté à MongoDB');
    app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
});
