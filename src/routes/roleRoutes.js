const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.use(authMiddleware);


// Routes accessibles aux administrateurs
router.post('/', roleMiddleware('admin'), roleController.createRole);
router.put('/:roleId', roleMiddleware('admin'), roleController.updateRole); 
router.delete('/:roleId', roleMiddleware('admin'), roleController.deleteRole); 
router.get('/', roleMiddleware('admin'), roleController.getAllRoles);
router.get('/:roleId', roleMiddleware('admin'), roleController.getRoleById);




module.exports = router;
