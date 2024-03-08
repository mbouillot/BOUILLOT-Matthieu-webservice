const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.use(authMiddleware);



// Routes accessibles aux administrateurs
router.get('/', roleMiddleware('admin'), skillController.getAllSkills);
router.get('/:skillId', roleMiddleware('admin'), skillController.getSkillById);
router.post('/', roleMiddleware('admin'), skillController.createSkill);
router.delete('/:skillId', roleMiddleware('admin'), skillController.deleteSkillById);
router.put('/:skillId', roleMiddleware('admin'), skillController.updateSkillById);


module.exports = router;
