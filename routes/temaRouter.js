const express = require("express");
const temaController = require("../controllers/temaController")

const router = express.Router();

router
  .route("/")
  .get(temaController.getAllTemas)
  .post(temaController.createTema);
router
  .route("/:id")
  .get(temaController.getTema)
  .patch(temaController.updateTema)
  .delete(temaController.deleteTema);

module.exports = router;