const Vente =require('../models/Vente');
const Lign_com = require('../models/Lign_com');
const Medicament = require('../models/Medicament');


exports.createVente = async (venteData, vendeurId) => {
    const { client, lignes } = venteData;

    if(!client || !lignes || lignes.length === 0) {
        throw new Error("Client and lignes are required");
    };

    const vente = new Vente({
        client,
        vendeur: vendeurId,
        montantTotal: 0,
        status: 'en cours'
    });
    await vente.save();
    const vente = await Vente.findById(id);

    let totalAmount = 0;

    for (const ligne of lignes) {
        const medicament = await Medicament.findById(ligne.medicament);
        if (!medicament) {
            throw new Error("Medicament not found");
        };

        if (medicament.qte_dispo < ligne.qte) {
            throw new Error ("Stock insuffisant pour le médicament: " + medicament.name);
        };

        const LigneCom = new Lign_com({
            vente: vente._id,
            medicament: ligne.medicament,
            quantite: ligne.qte,
            prixUnitaire: medicament.prix_vente
        });
        await LigneCom.save();
        const sousTotal = ligne.qte * medicament.prix_vente;
        totalAmount += sousTotal;
        medicament.qte_dispo -= ligne.qte;
        await medicament.save();
    };

    vente.montantTotal = totalAmount;
    await vente.save();

    
  
};
