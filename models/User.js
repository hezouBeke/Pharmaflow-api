const mongooze = require('mongoose');


const userSchema = new mongooze.Schema({
    name : { type : String, required : true },
    sex : { type : String, required : true },
    email : { type : String, required : true, unique : true },
    age :{ type : Number, required : true },
    tel : { type : String, required : true },

})