//jshint esversion:6
const TrainingSet = require("../models/TrainingSet");

displayHelloWorld = (req,res,next)=>{
  res.send("HELLO WORLD");
};

adminPanel = (req,res) =>{
  res.render("admin");
};

createIntent = async (req,res) => {

   var intent = req.body.intent;
   console.log(req.body);
   try{
      var foundSet = await TrainingSet.findOne({intent: intent});
      if(!foundSet){
         var temp1 = req.body.questions ? req.body.questions:[];
         var temp2 = req.body.answers ? req.body.answers:[];
         var createdSet = await TrainingSet.create({intent:req.body.intent, trainingPhrase: temp1, answer: temp2});
         console.log(createdSet);
      }else{
         var temp1 = foundSet.trainingPhrase;
         var temp2 = foundSet.answer;
         if(req.body.questions){
          for(i = 0;i < req.body.questions.length;i++)
          {
              if(req.body.questions[i] != "")
              { 
                  temp1.push(req.body.questions[i]);
              }
          }
        }
        if(req.body.answers){
          for(i = 0;i < req.body.answers.length;i++)
          {
            if(req.body.answers[i] != "")
            {
              temp2.push(req.body.answers[i]);
            }
          }
        }
          
        try{
         var updatedSet = await TrainingSet.findOneAndUpdate({intent:req.body.intent},{$set:{trainingPhrase:temp1,answer:temp2}});
        }
        catch(err)
        {
          console.log(err);
        }
      }
      res.status(200).jsonp({"message":"Success"})
   }catch(err)
   {
     console.log(err);
     res.status(400).jsonp({"message":"Failure"})

   }  
};

module.exports={
  displayHelloWorld,
  adminPanel,
  createIntent
};
