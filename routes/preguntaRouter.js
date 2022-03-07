const express = require("express");
const preguntaController = require("../controllers/preguntaController")

const router = express.Router();

router
  .route("/")
  .get(preguntaController.getAllPreguntas)
  .post(preguntaController.createPregunta);
router
  .route("/:id")
  .get(preguntaController.getPregunta)
  .patch(preguntaController.updatePregunta)
  .delete(preguntaController.deletePregunta);

module.exports = router;