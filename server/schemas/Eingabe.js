const { ObjectId } = require("mongoose");
const { Decimal128, mongo } = require("mongoose");
const { default: mongoose } = require("mongoose");

const Eingabeschema = new mongoose.Schema({
    UserID:{type:ObjectId},
    Titel: {type:String,required:true},
    Betrag:{type:Decimal128,required:true},
    Einzahlung:{type:Boolean},
    Datum:{type:Date,default: Date.now()},
},{
    timestamps: true
})

module.exports = mongoose.model("Eingabe",Eingabeschema);