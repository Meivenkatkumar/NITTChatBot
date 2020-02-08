//jshint esversion:6
const dataset = {
  intents:[
    {
      trainingPhrase:['goodbye for now','bye bye take care','okay see you later','I should go now'],
     intent:"goodbye",
     answer:['Till next time','see you soon!']
   },
   {
       trainingPhrase:['hello','hi','howdy'],
       intent:"hello",
       answer:['Hey there!','Greetings!']
   }
 ]
};



module.exports = dataset;
