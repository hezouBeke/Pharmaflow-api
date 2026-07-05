const mongoose = require("mongoose");


const Lign_comSchema = new mongoose.Schema({
    quantity : { type : Number, required : true },
    price : { type : Number, required : true },
    vente : {
        ref : 'Vente',
        type : mongoose.Schema.Types.ObjectId,
    },
    medicament : {
        ref : 'Medicament',
        type : mongoose.Schema.Types.ObjectId,
    }
},
{
    timestamps : true,
}
);


module.exports = mongoose.model("Lign_com", Lign_comSchema);