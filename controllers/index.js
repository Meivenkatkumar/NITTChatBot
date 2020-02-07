//jshint esversion:6

displayHelloWorld = (req,res,next)=>{
  res.send("HELLO WORLD");
};

adminPanel = (req,res) =>{
  res.render("admin");
};


module.exports={
  displayHelloWorld,
  adminPanel
};
