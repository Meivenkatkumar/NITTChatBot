//jshint esversion:6
const express= require("express");
const app=express();
const routes= require("./routes/index.js");


app.use("/",routes);


app.listen(3000,()=>{
  console.log("LISTENING IN PORT 3000");
});
