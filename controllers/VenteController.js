const venteService = require('../services/VenteService');



exports.create = async (req, res) => {
    try{
        const vente = await venteService.createVente(req.body, req.user.id);
        res.json({ message: "Vente ajoutée avec succès ✅", vente });
    } catch (error) {
        // console.error("Erreur lors de l'ajout de la vente :", error);
        res.status(500).json({ message: "Erreur lors de l'ajout de la vente", error });
    };
};


exports.get = async (req, res) => {

    try{
        const ventes = await venteService.getAllVentes();
        res.json({ ventes });

    }catch(error){
        res.status(500).json({ message: "Erreur lors de la récupération des ventes", error });
    }

};

exports.getOne = async (req, res) => {
    try{
        const vente = await venteService.getVenteById(req.params.id);
        if(!vente) return res.status(404).json({ message: "Vente introuvable" });
        res.json({ vente });    

    }catch(error){
        res.status(500).json({ message: "Erreur lors de la récupération de la vente", error });
    }

};


exports.update = async (req, res) => {
    try{
        const vente = await venteService.updateVente(req.params.id, req.body);
        res.json({ message: "Vente mise à jour avec succès ✅", vente });
    } catch(error){
        res.status(500).json({ message: "Erreur lors de la mise à jour de la vente", error: error.message });
    };
};

exports.delete = async (req, res) => {
    try{
        const vente = await venteService.updateVente(req.params.id, { status: 'annulée' });
        res.json({ message: "Vente annulée avec succès ✅", vente });
    } catch(error){
        res.status(500).json({ message: "Erreur lors de l'annulation de la vente", error: error.message });
    };
}


