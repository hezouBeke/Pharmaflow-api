const Vente = require('../models/Vente');
const Lign_com = require('../models/Lign_com');
const Medicament = require('../models/Medicament');
const AppError = require('../utils/AppError');

exports.createVente = async (venteData, vendeurId) => {
    const { client, lignes } = venteData;

    if (!client || !lignes || lignes.length === 0) {
        throw new AppError("Client and lignes are required", 400);
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
            throw new AppError("Medicament non trouvé", 404);
        }

        if (medicament.qte_dispo < ligne.quantite) {
            throw new AppError("Stock insuffisant pour le médicament: " + medicament.name, 400);
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


exports.getAllVentes = async () => {
    const ventes = await Vente.find();
    return ventes;
};

exports.getVenteById = async (id) => {
    const lignes = await Lign_com.find({ vente: id }).populate('medicament');
    const vente = await Vente.findById(id);

    if (!vente) throw new AppError("Vente non trouvée", 404);
    return { vente, lignes };
}; 

exports.updateVente = async (id, updateData) => {
    const vente = await Vente.findById(id);
    if (!vente) throw new AppError("Vente non trouvée", 404);

   
    if (updateData.status === 'annulée' && vente.status !== 'annulée') {
        const lignes = await Lign_com.find({ vente: id });

        for (const ligne of lignes) {
            const medicament = await Medicament.findById(ligne.medicament);
            if (medicament) {
                medicament.qte_dispo += ligne.quantite;
                await medicament.save();
            }
        }
    }

    const venteUpdated = await Vente.findByIdAndUpdate(id, updateData, { new: true });
    return venteUpdated;
};
