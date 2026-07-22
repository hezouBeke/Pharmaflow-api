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


exports.getAllmedic = async (req, res) => {
    try{
        const medics = Medicament.find();
        res.json(medics);
    }catch (err) {
        res.staus(500).json({ message : err.message});
    }
}



exports.getMedicById = async (req, res) => {
    try {
        const medic = await Medicament.findById(req.params.id) ;
        res.json(medic);
    }catch (err) {
        res.staus(500).json({ message : err.message });
    }
    
}


exports.updateMedic = async (req, res) => {
    try {
        await Medicament.findByIdAndUpdate(req.params.id);
        res.json(this.updateMedic);
    }catch(err){
        res.staus(500).json({ message : err.message });
    }
}


exports.deleteMedic = async (req, res) =>{
    try{
        await Medicament.findByIdAndDelete(req.params.id);
        res.json({ message :"Medicament supprimé avec succès !"});

    }catch(err){
        res.staus(500).json({ message : err.message })
    }
}