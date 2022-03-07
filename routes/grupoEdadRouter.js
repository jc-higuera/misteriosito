const express = require("express");
const grupoEdadController = require("../controllers/grupoEdadController")

const router = express.Router();

router
  .route("/")
  .get(grupoEdadController.getAllGruposEdad)
  .post(grupoEdadController.createGrupoEdad);
router
  .route("/:id")
  .get(grupoEdadController.getGrupoEdad)
  .patch(grupoEdadController.updateGrupoEdad)
  .delete(grupoEdadController.deleteGrupoEdad);

module.exports = router;