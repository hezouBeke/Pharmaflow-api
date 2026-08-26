const mongoose = require("mongoose");

const venteSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    montantTotal: { type: Number , default: 0 },
    status: {
        type: String,
        enum: ['en cours', 'terminée', 'annulée'],
        default: 'en cours'
    },
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
    vendeur: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Vente", venteSchema);