//jshint esversion:6

//Node modules
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/finalProject', {useNewUrlParser: true});


const routes= require("./routes/index.js");
const { NlpManager } = require('node-nlp');


//Schemas
const TrainingSet = require("./models/TrainingSet");

const manager = new NlpManager({ languages: ['en'] });
// Adds the utterances and intents for the NLP
manager.addDocument('en', 'goodbye for now', 'greetings.bye');
manager.addDocument('en', 'bye bye take care', 'greetings.bye');
manager.addDocument('en', 'okay see you later', 'greetings.bye');
manager.addDocument('en', 'bye for now', 'greetings.bye');
manager.addDocument('en', 'i must go', 'greetings.bye');
manager.addDocument('en', 'hello', 'greetings.hello');
manager.addDocument('en', 'hi', 'greetings.hello');
manager.addDocument('en', 'howdy', 'greetings.hello');
manager.addDocument('en','some shit','some shit');


// Train also the NLG
manager.addAnswer('en', 'greetings.bye', 'Till next time');
manager.addAnswer('en', 'greetings.bye', 'see you soon!');
manager.addAnswer('en', 'greetings.hello', 'Hey there!');
manager.addAnswer('en', 'greetings.hello', 'Greetings!');

// Train and save the model.
(async() => {
    await manager.train();
    manager.save();
    const response = await manager.process('en', 'khfehrufuhu');
    console.log(response.intent);
})();


app.set("view engine","ejs");    
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/",routes);
app.use(express.static(__dirname + '/public'));
app.set("view engine","ejs");
app.use(express.json({
  type: ['application/json', 'text/plain']
}))

app.get("/home",function(req,res){
   res.render("home");
})

app.get("/chatbot",function(req,res){
  res.render("chat");
})

app.listen(3000,()=>{
  console.log("LISTENING IN PORT 3000");
});
