 const MedicService = require("../services/MedicService");

 exports.create = async (req, res) => {
    try{
        await MedicService.createMedic(req.body);
        res.json({message : "Medicament ajouté avec succès ✅"})

    }catch(err){
        res.satus(500).json({ message : err.message});
    };

 };

 exports.get = async (req, res) => {
    try {
        await MedicService.getAllmedic();
        res.json({message : "liste des medicaments ajoutés"});
       }catch(err){
        res.satus(500).json({ message : err.message});
    }
 };

 exports.getOne = async (req, res) => {
     try {
        await MedicService.getMedicById();E
       }catch(err){
        res.satus(500).json({ message : err.message});
    };
 
 };

 exports.update = async(req, res) => {
    try {
        await MedicService.updateMedicc();
        res.json({ message : "Medicaemnt mis a jour avec succès !" });
       }catch(err){
        res.satus(500).json({ message : err.message});
    };
 };

 exports.delete = async(req, res) => {
      try {
        await MedicService.deleteMedic();
       }catch(err){
        res.satus(500).json({ message : err.message});
    };
 };

