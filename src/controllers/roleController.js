const Role = require('../models/Role');

exports.getAllRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.json(roles);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createRole = async (req, res) => {
    const role = new Role({
        name: req.body.name
    });

    try {
        const newRole = await role.save();
        res.status(201).json(newRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.updateRole = async (req, res) => {
    try {
        const updatedRole = await Role.findByIdAndUpdate(req.params.roleId, req.body, { new: true });
        res.json(updatedRole);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.deleteRole = async (req, res) => {
    try {
        await Role.findByIdAndDelete(req.params.roleId);
        res.json({ message: 'Rôle supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.getRoleById = async (req, res) => {
    try {
        const role = await Role.findById(req.params.roleId);
        if (!role) {
            return res.status(404).json({ message: 'Rôle non trouvé' });
        }
        res.json(role);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
