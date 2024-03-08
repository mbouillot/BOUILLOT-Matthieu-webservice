const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
 }

 exports.createProject = async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description
    });

    try {
        const newProject = await project.save();
        res.status(201).json({ name: newProject.name, description: newProject.description });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


exports.getProjectById = async (req, res) => {
    const projectId = req.params.projectId;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.deleteProjectById = async (req, res) => {
    const projectId = req.params.projectId;

    try {
        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.updateProjectById = async (req, res) => {
    const projectId = req.params.projectId;

    try {
        const updatedProject = await Project.findByIdAndUpdate(projectId, req.body, { new: true });
        if (!updatedProject) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(updatedProject);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
