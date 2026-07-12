const mongoose = require("mongoose");

const MedicSchema = new mongoose.Schema({
    name : { type : String, required : true },
    codebar : {type : String, required : true },
    desc : { type : String, required : true },
    prix_unit : { type : Number, required : true },
    qte_dispo : { type : Number, required: true },

    Category: {
        ref : "Category",
        type : mongoose.Schema.Types.ObjectId,
        required : true
    }
},
{
  timestamps : true,
});

module.exports = mongoose.model("Medicament", MedicamentSchema);