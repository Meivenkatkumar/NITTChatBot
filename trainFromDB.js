//jshint esversion:6
const TrainingSet = require("./models/TrainingSet");
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ languages: ['en'] });
const dataset = require("./dataset");



const trainFromDB= async function(){
     try{
       console.log("in here");
     let intentFromDB = await TrainingSet.find();
     let intentFromDataset = dataset.intents;
     let intents = intentFromDB.concat(intentFromDataset);
     console.log(intents);
     intents.forEach(function(intent){

         intent.trainingPhrase.forEach(function(ele){
           manager.addDocument('en',ele,intent.intent);
         });
         intent.answer.forEach(function(ele){
           manager.addAnswer('en',intent.intent,ele);
         });
     });
     // for(var i=0;i<intents.length;i++){
     //   for(var j=0;j<intents[i].trainingPhrase.length;j++){
     //     manager.addDocument('en',intents[i].trainingPhrase[j],intents[i].intent);
     //   }
     //   for(var k=0;j<intents[i].answer.length;k++){
     //     manager.addDocument('en',intents[i].intent,intents[i].answer[k]);
     //   }
     // }
     await manager.train();
     manager.save();
   }
   catch(err){
     console.log(err);
   }
};


const getResponseObjectFromBot = async function (query) {
  try{
    console.log(query);
    const response = await manager.process('en', query);
    return response;
  }
  catch(err) {
    console.log(err);
    return(err);
  }

}





module.exports={
  getResponseObjectFromBot,
  trainFromDB
};
