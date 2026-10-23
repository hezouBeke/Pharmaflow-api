const MedicService = require("../services/MedicService");

exports.create = async (req, res, next) => {
    try {
        const medic = await MedicService.createMedic(req.body);
        res.status(201).json({ message: "Médicament ajouté avec succès", medic });
    } catch (err) {
        next(err);
    }
};

exports.get = async (req, res, next) => {
    try {
        const medics = await MedicService.getAllMedic();
        res.json(medics);
    } catch (err) {
        next(err);
    };
};

exports.getOne = async (req, res, next ) => {
    try {
        const medic = await MedicService.getMedicById(req.params.id);
        res.json(medic);
    } catch (err) {
         next(err);
    };
};

exports.update = async (req, res, next) => {
    try {
        const medic = await MedicService.updateMedic(req.params.id, req.body);
        res.json({ message: "Médicament mis à jour avec succès ✅", medic });
    } catch (err) {
         next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        await MedicService.deleteMedic(req.params.id);
        res.json({ message: "Médicament supprimé avec succès ✅" });
    } catch (err) {
         next(err);
    }
};

exports.checkQuantityMedic = async (req, res, next ) => {
    try {
        const result = await MedicService.checkQuantity(req.params.id);
        res.json(result);
    } catch (err) {
       next(err);
    }
};