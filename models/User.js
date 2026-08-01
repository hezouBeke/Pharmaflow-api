const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name : { type : String, required : true },
    sex : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    password : { type : String , required : true },
    age :{ type : Number, required : true },
    tel : { type : String, required : true },

    role : {
        type : String,
        enum: ['admin', 'vendeur'],
        default : 'vendeur'
    }
},
  {
    timestamps : true,
});

module.exports = mongoose.model('User', userSchema);