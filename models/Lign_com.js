const mongoose = require("mongoose");

const LignSchema = new mongoose.Schema({ 
    vente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vente',
        required: true,
    },
    medicament: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medicament',
        required: true,
    },
    quantite: {
        type: Number,
        required: true,
    },
    prixUnitaire: {
        type: Number,
        required: true,
    },
   
},{
    timestamps: true
});

module.exports = mongoose.model("Lign_com", LignSchema);