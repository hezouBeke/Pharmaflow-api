const mongoose = require("mongoose");

const assuranceSchema = new mongoose.Schema({
    name: { 
        type: String, 
        enum: ['AMU', 'INAM'], 
        required: true 
    },
    reduction: { type: Number, required: true } 
},
{
    timestamps: true,
});

module.exports = mongoose.model("Assurance", assuranceSchema);