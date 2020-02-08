//jshint esversion:6
const TrainingSet = require("./models/TrainingSet");
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const dataset = require("./dataset");



const trainFromDB= async function(){
     let intentFromDB = await TrainingSet.find();
     let intentFromDataset = dataset.intents;
     let intents = intentFromDB.concat(intentFromDataset);
     intents.forEach(function(intent){
         intent.trainingPhrase.forEach(function(ele){
           manager.addDocument('en',ele,intent.intent);
         });
         intent.answer.forEach(function(ele){
           manager.addAnswer('en',intent.intent,ele);
         });
     });
     await manager.train();
     manager.save();

};


const getResponseObjectFromBot = async function (query) {
  const response = await manager.process('en', 'I should go now');
  return response;
}





module.exports={
  getResponseObjectFromBot,
  trainFromDB
};
