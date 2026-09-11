const Medicament = require("../models/Medicament");
const Category = require("../models/Category");

exports.createMedic = async (medicData) => {
    const categoryExists = await Category.findById(medicData.Category);
    if (!categoryExists) {
        throw new Error("Catégorie introuvable");
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
    if (!medic) throw new Error("Médicament introuvable");
    return medic;
};

exports.updateMedic = async (id, updateData) => {
    const medic = await Medicament.findByIdAndUpdate(id, updateData, { new: true });
    if (!medic) throw new Error("Médicament introuvable");
    return medic;
};

exports.deleteMedic = async (id) => {
    const medic = await Medicament.findByIdAndDelete(id);
    if (!medic) throw new Error("Médicament introuvable");
    return medic;
};

exports.checkQuantity = async (id) => {
    const medic = await Medicament.findById(id);
    if (!medic) throw new Error("Médicament introuvable");
    if (medic.qte_dispo < 10) {
        return { alert: true, message: "Quantité insuffisante, réapprovisionnement nécessaire" };
    }
    return { alert: false, message: "Stock suffisant" };
};