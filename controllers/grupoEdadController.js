const GrupoEdad = require("../models/grupoEdadModel")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllGruposEdad= catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    let features = new APIFeatures(GrupoEdad.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
  
    const doc = await features.query;
    
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });


  exports.getGrupoEdad = factory.getOne(GrupoEdad);
  exports.createGrupoEdad = factory.createOne(GrupoEdad);
  exports.updateGrupoEdad = factory.updateOne(GrupoEdad);
  exports.deleteGrupoEdad = factory.deleteOne(GrupoEdad);