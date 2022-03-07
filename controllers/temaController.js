const Tema = require("../models/temaModel")
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");
const APIFeatures = require("./../utils/apiFeatures");

exports.getAllTemas = catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    let features = new APIFeatures(Tema.find(filter), req.query)
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


  exports.getTema = factory.getOne(Tema);
  exports.createTema = factory.createOne(Tema);
  exports.updateTema = factory.updateOne(Tema);
  exports.deleteTema = factory.deleteOne(Tema);
