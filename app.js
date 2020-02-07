//jshint esversion:6

//NodeModules
const express = require("express");
const app= express();

//Schemas
const TrainingSet = require("./models/TrainingSet");

const routes = require("./routes/index.js");


app.use("/",routes);


app.listen(3000,()=>{
  console.log("LISTENING IN PORT 3000");
});
