const venteService = require('../services/VenteService');



exports.create = async (req, res) => {
    try{
        const vente = await venteService.createVente(req.body, req.user.id);
        res.json({ message: "Vente ajoutée avec succès ✅", vente });
    } catch (error) {
        console.error("Erreur lors de l'ajout de la vente :", error);
        res.status(500).json({ message: "Erreur lors de l'ajout de la vente", error });
    };
};

