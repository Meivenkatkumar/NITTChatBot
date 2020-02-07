//jshint esversion:6
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
  res.send('user root');
});

router.get("/home",function(req,res){
  res.render("home");
})



module.exports=router;
