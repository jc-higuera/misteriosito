const Pregunta = require("../models/preguntaModel")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllPreguntas = catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    let features = new APIFeatures(Pregunta.find(filter), req.query)
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


  exports.getPregunta = factory.getOne(Pregunta);
  exports.createPregunta = factory.createOne(Pregunta);
  exports.updatePregunta = factory.updateOne(Pregunta);
  exports.deletePregunta = factory.deleteOne(Pregunta);