//jshint esversion:6
const dataset = {
  intents:[
    {
        trainingPhrase:['hello','hi','howdy'],
        intent:"hello",
        answer:['Hey there!','Greetings!']
    },
    {
      trainingPhrase:['goodbye for now','bye bye take care','okay see you later','I should go now'],
     intent:"goodbye",
     answer:['Till next time','see you soon!']
   },

 ]
};



module.exports = dataset;
