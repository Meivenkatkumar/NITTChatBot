//jshint esversion:6

//Node modules
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/finalProject', {useNewUrlParser: true, useUnifiedTopology: true});

const routes= require("./routes/index.js");

const { trainFromDB,getResponseObjectFromBot } =require('./trainFromDB');

//Schemas
const TrainingSet = require("./models/TrainingSet");


// Adds the utterances and intents for the NLP


// Train also the NLG



// Train and save the model.



app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",routes);
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");











app.listen(3000, async ()=>{
  try{
    await trainFromDB();
    console.log("LISTENING IN PORT 3000");
  }
  catch(err){
    console.log(err);
  }

});
