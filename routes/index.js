//jshint esversion:6
const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const rootController = require('../controllers/index.js');



router.use("/user",userRoutes);

router.get('/',(req,res,next)=>{
  rootController.displayHelloWorld(req,res,next);
});


router.get('/about', function (req, res) {
  res.send('About');
});



module.exports=router;
