var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";
recognition.continuous = true;
recognition.start();

recognition.onresult = function(event) {
    
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    const speechToText = event.results[i][0].transcript;
  }
};