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
   {
     trainingPhrase:['what is festember?','pragyan','nittfest','sportsfete'],
    intent:"fests",
    answer:['fest of nitt','cultural fest']
  },
  {
    trainingPhrase:['what is opal','what is agate','garnet','aquamarine','coral','diamond'],
   intent:"hostels",
   answer:["hostel of nitt",]
 },
 {
   trainingPhrase:["where am i, where is orion","where is LHC","give me the NITT map","map"],
   intent:"NITT_MAP",
   answer:["NITT MAP"]
 }

 ]
};



module.exports = dataset;
