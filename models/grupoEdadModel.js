const mongoose = require("mongoose");

const preguntaSchema = new mongoose.Schema({
    titulo: String,
    opciones: [String],
    respuestaCorrecta: String,
    informacion: String,
    imagenes: [String],
    puntaje: Number
});

const temaSchema = new mongoose.Schema({
    titulo: String,
    informacion: String,
    videos: [String],
    imagenes: [String]
});

const grupoEdadSchema = new mongoose.Schema({
    grupoEdad : String,
    temas: [preguntaSchema],
    preguntas: [temaSchema]
})

module.exports = mongoose.model("GrupoEdad", grupoEdadSchema)