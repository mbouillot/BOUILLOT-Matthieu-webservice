// routes/projectRoutes.js

const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware'); // Assurez-vous d'importer le middleware d'authentification
const roleMiddleware = require('../middleware/roleMiddleware');

// Middleware d'authentification pour toutes les routes
router.use(authMiddleware);

// Routes accessibles aux invités (non connectés) et aux utilisateurs connectés
router.get('/', projectController.getAllProjects);

// Route pour récupérer un projet par ID
router.get('/:projectId', roleMiddleware('user'), projectController.getProjectById);
router.get('/', roleMiddleware('user'), projectController.getAllProjects);


// Routes accessibles aux administrateurs
router.post('/', roleMiddleware('admin'), projectController.createProject);
router.put('/:projectId', roleMiddleware('admin'), projectController.updateProjectById);
router.delete('/:projectId', roleMiddleware('admin'), projectController.deleteProjectById);
router.get('/', roleMiddleware('admin'), projectController.getAllProjects);
router.get('/:projectId', roleMiddleware('admin'), projectController.getProjectById);


module.exports = router;
