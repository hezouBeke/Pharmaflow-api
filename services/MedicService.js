const Medicament = require("../models/Medicament")

exports.createMedic = async (medicData) => {
    const medic = new Medicament({ ...medicData});
    await medic.save();
    return medic

}