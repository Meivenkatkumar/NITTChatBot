const SpeechToText = require("SpeechToText");

if (!('webkitSpeechRecognition' in window)) {
   throw new Error("This browser doesn't support speech recognition. Try Google Chrome.");
}