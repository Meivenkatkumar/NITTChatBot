$(".person").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
})

document.getElementById("typing").style.display="none";

const startyping = () => {
    var chatlog = document.getElementById("chat-log");
    var content = `<div id="typing" class="outgoing typing"><div class="bubble"><div class="ellipsis one"></div><div class="ellipsis two"></div><div class="ellipsis three"></div></div></div>`;
    chatlog.insertAdjacentHTML("beforeEnd",content);
    // document.getElementById("typing").style.display="";
}

const stoptyping = () =>{
//   document.getElementById("typing").style.display="none";
$( "#typing" ).remove();
}

const incomingchat = (text) => {
    if(text.length){
    var msg = document.getElementById("chat-log");
    var msgdiv= `<div class="incoming">`;
    msgdiv += `<div class="bubble">`+text+`</div>`;
    msgdiv += `</div>`;
    msg.insertAdjacentHTML("beforeEnd",msgdiv);
    updateScroll();
    document.getElementById("chat-msg").value="";
    stoptyping();
    }
}


const makeRequest = (msg) =>{
  console.log(msg);
  if(!msg || msg===''){
    return "Please type something"
  }else{
 console.log(msg);
    var request = $.ajax({
  url: "/chatbot/sendMessage",
  type: "POST",
  data: {msg : msg},
  dataType: "html"
});

request.done(function(response) {
  stoptyping();
  incomingchat(response);

});

request.fail(function(jqXHR, textStatus) {
  alert( "Request failed: " + textStatus );
});
  }
}


const outgoingchat =   (text) => {
    if(text.length){
    var msg = document.getElementById("chat-log");
    var msgdiv= `<div class="outgoing">`;
    msgdiv += `<div class="bubble">`+text+`</div>`;
    msgdiv += `</div>`;
    msg.insertAdjacentHTML("beforeEnd",msgdiv);

    updateScroll();
    startyping();
    console.log(document.getElementById("chat-msg"));
   makeRequest(document.getElementById("chat-msg").value);
     document.getElementById("chat-msg").value="";

    }
}

var sendbtn=document.getElementById("sendbtn");
document.getElementById("chat-msg").addEventListener("keydown",function(e)
{

    if(e.keyCode==13){
        const text = document.getElementById("chat-msg").value;
        outgoingchat(text);
        text.value="";
    }

})
sendbtn.addEventListener("click",function(e)
{
   const text = document.getElementById("chat-msg").value;
   outgoingchat(text);
   text.value="";
})


function updateScroll(){
    var element = document.getElementById("chat-log");
    element.scrollTop = element.scrollHeight;
}
