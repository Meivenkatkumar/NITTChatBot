$(".person").on('click', function(){
    $(this).toggleClass('focus').siblings().removeClass('focus');
})

document.getElementById("typing").style.display="none";

const startyping = () => {
    document.getElementById("typing").style.display="";
}
   
const stoptyping = () =>{
  document.getElementById("typing").style.display="none";
}

const incomingchat = (text) => {
    if(text.length){
    var msg = document.getElementById("chat-body");
    var msgdiv= `<div class="incoming">`;
    msgdiv += `<div class="bubble">`+text+`</div>`;
    msgdiv += `</div>`;
    msg.insertAdjacentHTML("beforend",msgdiv);
    updateScroll();
    document.getElementById("chat-msg").value="";
    stoptyping();
    }
}

const outgoingchat = (text) => {
    if(text.length){
    var msg = document.getElementById("chat-log");
    var msgdiv= `<div class="outgoing">`;
    msgdiv += `<div class="bubble">`+text+`</div>`;
    msgdiv += `</div>`;
    msg.insertAdjacentHTML("beforeEnd",msgdiv);
    updateScroll();
    document.getElementById("chat-msg").value="";
    startyping();
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
