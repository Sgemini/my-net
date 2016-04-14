# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

//Picture transfer
var photo=document.getElementById('imgs').getElementsByTagName('li');
var num=document.getElementById("imgNum").getElementsByTagName("li");
var bigimgs=document.getElementById("bigImg");
var img=document.getElementById('imgs');
var iNuw=0;
var dt=null;
img.style.width=photo.length*photo[0].offsetWidth+"px";

function tab(){
for(var i=0;i<num.length;i++){
    num[i].index=i;
    num[i].onclick=function(){
        clearInterval(dt);
        iNuw=this.index;
        for(var i=0;i<num.length;i++){
            num[i].className="b";        
        }
        this.className="a";
        img.style.left=-(photo[0].offsetWidth*iNuw)+"px";        
    }
    num[i].onmouseout=function(){
            start();
    }
}
}

function start(){
　　clearInterval(dt);
    dt=setInterval(function(){
        if(iNuw>num.length-2){
        iNuw=0;
        }else{
        iNuw++;
        }
        for(var k=0;k<num.length;k++){
            if(iNuw==num[k].index){num[k].className='a';}else{num[k].className='b';}
        }
        img.style.left=-(photo[0].offsetWidth*iNuw)+"px";   
    },3000);
    tab();
}

start();


