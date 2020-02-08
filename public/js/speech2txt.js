var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.continuous = true;
var speech="",speech1="";
document.getElementById("voiceRecog").addEventListener("click",function(e)
{
    try{
      document.getElementById("recognise").removeAttribute("id");
    }catch(err){

    }
    const context = '<div class="incoming"><div id="recognise" class="bubble"></div></div>';
    // var chatlog = document.getElementById("chat-log");
    // chatlog.insertAdjacentElement("beforeEnd", context);
    $("#chat-log").append(context);
    recognition.start();
    recognition.onresult = function(event) {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        console.log(event.results[i][0].transcript); 
        speech1 = event.results[i][0].transcript;
        if(speech1!=speech){
            speech=speech1;
            document.getElementById("recognise").innerHTML=speech1;
        }
      }  
    }    
})
document.getElementById("recognise").removeAttribute("id");