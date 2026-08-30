const Vente = require('../models/Vente');
const Lign_com = require('../models/Lign_com');
const Medicament = require('../models/Medicament');

exports.createVente = async (venteData, vendeurId) => {
    const { client, lignes } = venteData;

    if (!client || !lignes || lignes.length === 0) {
        throw new Error("Client and lignes are required");
    }

    const vente = new Vente({
        client,
        vendeur: vendeurId,
        montantTotal: 0,
        status: 'en cours'
    });
    await vente.save();

    let totalAmount = 0;

    for (const ligne of lignes) {
        const medicament = await Medicament.findById(ligne.medicament);
        if (!medicament) {
            throw new Error("Medicament not found");
        }

        if (medicament.qte_dispo < ligne.quantite) {
            throw new Error("Stock insuffisant pour le médicament: " + medicament.name);
        }

        const ligneCom = new Lign_com({
            vente: vente._id,
            medicament: ligne.medicament,
            quantite: ligne.quantite,
            prixUnitaire: medicament.prix_unit
        });
        await ligneCom.save();

        const sousTotal = ligne.quantite * medicament.prix_unit;
        totalAmount += sousTotal;

        medicament.qte_dispo -= ligne.quantite;
        await medicament.save();
    }

    vente.montantTotal = totalAmount;
    await vente.save();

    return vente;
};