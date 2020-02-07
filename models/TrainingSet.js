var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var trainingSet = new Schema({
          
          trainingPhrase : [String],
          intent : String,
          answer : [String]
});

var TrainingSet = mongoose.model('TrainingSet',trainingSet);

module.exports = TrainingSet;