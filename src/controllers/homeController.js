const Project = require('../models/Project');

exports.getRecentProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 }).limit(3);
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
