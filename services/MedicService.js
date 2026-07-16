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

exports.getMedicById = async (id) => {
    try {
    }catch (err) {}
    
}

