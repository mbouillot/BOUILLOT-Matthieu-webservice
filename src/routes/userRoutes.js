const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.use(authMiddleware);


// Routes accessibles aux invités (non connectés)
router.get('/', userController.getAllUsers);

// Routes accessibles aux utilisateurs connectés
router.get('/', roleMiddleware('user'), userController.getAllUsers);
router.get('/:userId', roleMiddleware('user'), userController.getUserById);


// Routes accessibles aux administrateurs
router.post('/', roleMiddleware('admin'), userController.createUser);
router.delete('/:userId', roleMiddleware('admin'), userController.deleteUser);
router.put('/:userId', roleMiddleware('admin'), userController.updateUser);
router.get('/', roleMiddleware('admin'), userController.getAllUsers);
router.get('/:userId', roleMiddleware('admin'), userController.getUserById);



module.exports = router;
