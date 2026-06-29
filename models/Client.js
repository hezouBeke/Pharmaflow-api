const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
    name : { type : String, required : true },
    sex : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String, required : true , unique : true },
    age :{ type : Number, required : true },
    tel : { type : String, required : true },
},
  {
    timestamps : true,
});

module.exports = mongoose.Model("Client", clientSchema);