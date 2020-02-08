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
    const context = '<div class="outgoing"><div id="recognise" class="bubble"></div></div>';
    $("#chat-log").append(context);
    recognition.start();
    recognition.onresult = async (event) => {
      try{
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          speech1 = await event.results[i][0].transcript;
          document.getElementById("recognise").innerHTML=speech1;

        }
      }catch(err){

        console.log("Please try again!");
      }
    }
    setTimeout(function(){
       recognition.stop();
        makeRequest(speech1);
    }, 5000);
})
