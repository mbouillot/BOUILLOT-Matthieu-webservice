const Skill = require('../models/Skill');

exports.getAllSkills = async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createSkill = async (req, res) => {
    const skill = new Skill({
        name: req.body.name
    });

    try {
        const newSkill = await skill.save();
        res.status(201).json(newSkill);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.getSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.skillId);
        if (skill == null) {
            return res.status(404).json({ message: "Compétence introuvable" });
        }
        res.json(skill);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

exports.deleteSkillById = async (req, res) => {
    try {
        const skill = await Skill.findByIdAndDelete(req.params.skillId);
        if (!skill) {
            return res.status(404).json({ message: "Compétence introuvable" });
        }
        res.json({ message: "Compétence supprimée avec succès" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}



exports.updateSkillById = async (req, res) => {
    try {
        const skill = await Skill.findById(req.params.skillId);
        if (skill == null) {
            return res.status(404).json({ message: "Compétence introuvable" });
        }

        if (req.body.name != null) {
            skill.name = req.body.name;
        }
        
        const updatedSkill = await skill.save();

        res.json(updatedSkill);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
