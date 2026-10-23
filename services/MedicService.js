const Medicament = require("../models/Medicament");
const Category = require("../models/Category");
const AppError = require("../utils/AppError");

exports.createMedic = async (medicData) => {
    const categoryExists = await Category.findById(medicData.Category);
    if (!categoryExists) {
        throw new AppError("Catégorie introuvable", 404);
    }
    const medic = new Medicament({ ...medicData });
    await medic.save();
    return medic;
};

exports.getAllMedic = async () => {
    const  medics  = await Medicament.find();
    const  medicsChecked = medics.map((medic) => {
        if(medic.qte_dispo < 10) {
            return { ...medic.toObject(), alert: true, message: "Quantité insuffisante, réapprovisionnement nécessaire" };
        }
        return { ...medic.toObject(), alert: false, message: "Stock suffisant" };
    });
    return medicsChecked;
};

exports.getMedicById = async (id) => {
    const medic = await Medicament.findById(id);
    if (!medic) throw new AppError("Médicament introuvable", 404);
    return medic;
};

exports.updateMedic = async (id, updateData) => {
    const medic = await Medicament.findByIdAndUpdate(id, updateData, { new: true });
    if (!medic) throw new AppError("Médicament introuvable", 404);
    return medic;
};

exports.deleteMedic = async (id) => {
    const medic = await Medicament.findByIdAndDelete(id);
    if (!medic) throw new AppError("Médicament introuvable", 404);
    return medic;
};

exports.checkQuantity = async (id) => {
    const medic = await Medicament.findById(id);
    if (!medic) throw new AppError("Médicament introuvable", 404);
    if (medic.qte_dispo < 10) {
        return { alert: true, message: "Quantité insuffisante, réapprovisionnement nécessaire" };
    }
    return { alert: false, message: "Stock suffisant" };
};