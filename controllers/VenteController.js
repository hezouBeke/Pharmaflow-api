const venteService = require('../services/VenteService');



exports.create = async (req, res) => {
    try{
        const vente = await venteService.createVente(req.body);
        res.json({ message: "Vente ajoutée avec succès ✅", vente });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la vente", error });
    };
};

