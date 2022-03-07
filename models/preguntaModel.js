const mongoose = require("mongoose");

const preguntaSchema = new mongoose.Schema({
    titulo: String,
    opciones: [String],
    respuestaCorrecta: String,
    informacion: String,
    imagenes: [String],
    puntaje: Number
});

module.exports = mongoose.model("Pregunta", preguntaSchema)