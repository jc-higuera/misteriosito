const mongoose = require("mongoose");

const temaSchema = new mongoose.Schema({
    titulo: String,
    informacion: String,
    videos: [String],
    imagenes: [String]
})
module.exports = mongoose.model("Tema", temaSchema)