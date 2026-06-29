const mongoose = require("mongoose");
const Category = require("./Category");

const medicSchema = new mongoose.Schema(
    {
    name : { type : String, required : true },
    cde_barre : { type : String, required : true , unique : true},
    desc : { type : String , required : true },
    price_unit : { type : Number , required : true },
    stock : { type : Number , required: true },
    Category : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required : [true, 'La catégorie est obligatoire'],
    }  
},
  {
    timestamps : true,
}
);

module.exports = mongoose.Model("Medicament", medicSchema);