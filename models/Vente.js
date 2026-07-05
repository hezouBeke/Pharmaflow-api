const mongoose = require("mongoose");

const venteSchema = new mongoose.Schema({ 

    date : { type : Date , required : true },
    heure : { type : String , required : true },
    montantTotal : { type : Number , required : true },
    status : { 
        type : String ,
        enum : ['en cours', 'terminée', 'annulée'],
        required : true 
        },

    client : {
        ref : 'Client',
        type : mongoose.Schema.Types.ObjectId,
        required : true,
    },
    vendeur



});

module.exports = mongoose.model("Vente", venteSchema);