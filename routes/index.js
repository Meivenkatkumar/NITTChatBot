//jshint esversion:6
const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const rootController = require('../controllers/index.js');



router.use("/user",userRoutes);

router.get('/',(req,res,next)=>{
  rootController.displayHelloWorld(req,res,next);
});

router.get("/admin", (req,res) => {
  rootController.adminPanel(req,res);
});

router.post("/admin/createIntent", (req,res) => {
  rootController.createIntent(req,res);
});

router.get('/about', function (req, res) {
  res.send('About');
});

router.get("/chatbot",function(req,res){
  res.render("chat");
});

router.post("/chatbot/sendMessage", async function(req,res){
  console.log(req.body);
  const resp= await rootController.getResponseFromBot(req.body.msg);
  console.log(resp);
  if(resp.intent==="None"){
    res.send("Couldn't catch that? Repeat maybe?")
  }
  res.send(resp.answer)
});



router.ge

module.exports = router;
