const venteService = require('../services/VenteService');
const AppError = require("../utils/AppError");


exports.create = async (req, res, next) => {
    try{
        const vente = await venteService.createVente(req.body, req.user.id);
        res.json({ message: "Vente ajoutée avec succès ✅", vente });
    } catch (err) {
        // console.error("Erreur lors de l'ajout de la vente :", error);
         next(err);
    };
};


exports.get = async (req, res, next) => {

    try{
        const ventes = await venteService.getAllVentes();
        res.json({ ventes });

    }catch(err){
        next(err);
    }

};

exports.getOne = async (req, res, next) => {
    try{
        const vente = await venteService.getVenteById(req.params.id);
        res.json({ vente });    

    }catch(err){
        next(err);
    }

};


exports.update = async (req, res, next) => {
    try {
        const { vente } = await venteService.getVenteById(req.params.id);
        
        if (vente.status === 'terminée' && req.user.role !== 'admin') {
           throw new AppError("Seul un admin peut modifier une vente terminée", 403);
        }

        const venteUpdated = await venteService.updateVente(req.params.id, req.body);
        res.json({ message: "Vente mise à jour avec succès ✅", vente: venteUpdated });
    } catch(err){
         next(err);
    };
};


exports.delete = async (req, res, next) => {
    try {
        const vente = await venteService.getVenteById(req.params.id);
        
        if (vente.vente.status === 'terminée' && req.user.role !== 'admin') {
            throw new AppError("Seul un admin peut modifier une vente terminée", 403);
        }

        const venteUpdated = await venteService.updateVente(req.params.id, { status: 'annulée' });
        res.json({ message: "Vente annulée avec succès ✅", vente: venteUpdated });
    } catch(err){
        next(err);
    };
}

