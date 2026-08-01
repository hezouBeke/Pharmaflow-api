const MedicService = require("../services/MedicService");

exports.create = async (req, res) => {
    try {
        const medic = await MedicService.createMedic(req.body);
        res.json({ message: "Médicament ajouté avec succès ✅", medic });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.get = async (req, res) => {
    try {
        const medics = await MedicService.getAllMedic();
        res.json(medics);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getOne = async (req, res) => {
    try {
        const medic = await MedicService.getMedicById(req.params.id);
        res.json(medic);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const medic = await MedicService.updateMedic(req.params.id, req.body);
        res.json({ message: "Médicament mis à jour avec succès ✅", medic });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        await MedicService.deleteMedic(req.params.id);
        res.json({ message: "Médicament supprimé avec succès ✅" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.checkQuantityMedic = async (req, res) => {
    try {
        const result = await MedicService.checkQuantity(req.params.id);
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};