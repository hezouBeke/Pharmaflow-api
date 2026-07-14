 const MedicService = require("../services/MedicService");

 exports.create = async (req, res) => {
    try{
        await MedicService.createMedic(req.body);
        res.json({message : "Medicament ajouté avec succès ✅"})

    }catch(err){
        res.satus(500).json({ message : err.message});
    }

 };