const express = require("express");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const temaRouter = require("./routes/temaRouter")
const preguntaRouter = require("./routes/preguntaRouter")
const grupoEdadRouter = require("./routes/grupoEdadRouter")


const app = express();

app.use(mongoSanitize());
app.use(hpp());

app.use(express.json());

//ROUTES
app.use("/api/temas", temaRouter);
app.use("/api/preguntas", preguntaRouter);
app.use("/api/grupoEdad", grupoEdadRouter);

// RUN
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
