import mongoose from "mongoose";

const eingabeSchema = new mongoose.Schema({
    Titel: {type:String,required:true},
    Betrag:{type:Decimal128,required:true},
    Einzahlung:{type:Boolean},
    Datum:{type:Date,default: Date.now()},
},{
    timestamps: true
})

module.exports = mongoose.model("Eingabe",eingabeSchema);