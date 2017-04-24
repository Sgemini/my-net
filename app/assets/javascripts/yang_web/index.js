/*----------------------------------  JSONP回调函数     -------------------------------------------------------------------------*/
function searchResult(data){
  var html='';
  var oSearch_result=tools.ID(document,'#search-list');
  
  for (var i=0;i<data.s.length;i++) {
    html +='<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
  }
  oSearch_result.innerHTML=html;
}


window.onload= window.onresize=function (){

/*--------------------------------------覆盖层------------------------------------------------------------------------*/
  var oMark =document.getElementById("mark");
  var oLeart =document.getElementById("alert");
  var oSign =tools.ID(document,'#Sign');

  tools.veiwCneter(oLeart);
  tools.Css(oMark,{width:tools.bodyVeiw().W,height:tools.bodyVeiw().H})

  oSign.onclick =function (){
    oMark.style.transform ="scale(0)";
    oLeart.style.display ="none"
    return false;
  }



/*------------------------------------搜索区------------------------------------------------------------------*/
  var oSearch =tools.ID(document,"#search");
  var oSearchConten =tools.ID(document,".search_content")[0];
  var oSearch_input =tools.ID(oSearch,"input")[0];
  var oSearch_submit =tools.ID(oSearch,"a")[0];
  var oSearch_result=tools.ID(document,'#search-list');

  oSeachCenter();

  tools.addEventFn(oSearch_input,"click",function(ev){
    var e =ev || event;
    e.cancelBubble =true;
    tools.attr(oSearch_input,"value" ,"");
    tools.addClassName(oSearchConten,"active");
    tools.addClassName(oList,"down");
  })

  tools.addEventFn(oSearch_submit,"click",function(ev){
    var e =ev || event;
    e.cancelBubble =true;
    var val =oSearch_input.value;
    tools.attr(oSearch_submit,"href","https://www.baidu.com//s?wd="+val);

  })


  oSearch_input.onkeyup = function() {
      
      if ( this.value != '' ) {
        oSearch_result.style.display = 'block';
        var oScript = document.createElement('script');
        oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=searchResult';
        document.body.appendChild(oScript);
      } else {
        oSearch_result.style.display = 'none';
      }
      
    }


  tools.addEventFn(document,"click",function(ev){
    tools.removeClassName(oList,"down");
    tools.removeClassName(oSearchConten,"active");
    
    oSearch_result.style.display='none';
    oSearch_input.value='';
    
  })

  //取消搜素结果onlick事件冒泡到document
  var searchLi=oSearch_result.getElementsByTagName('a');
  for (var i=0;i<searchLi.length;i++) {
    searchLi.onclick=function(ev){
      var event =ev || event;
      event.preventDefault();
      event.stopPropagation();
      event.cancelBubble = true;
    }
  }

  function oSeachCenter() {
    tools.veiwCneter(oSearch);
    
    oSearchConten.style.transform ="none";
    var W =tools.Css(oSearch,"width")-162;
    tools.Css(oSearchConten,"width",W);
  }



/*------------------------------------  天气       -------------------------------------------------------------------*/
  var oWreather =document.getElementById('weather');
  var aDivs =oWreather.getElementsByTagName('div');
  var aP =oWreather.getElementsByTagName('p');
  var aDivIndex=1;
  var overTimer =null;
        
        
  aDivs[0].onmouseover=function(){
    
    clearInterval(overTimer);
    
    tools.removeClassName(aDivs[aDivIndex],'hidden')
    tools.addClassName(aDivs[aDivIndex],'show');
    overTimer= setInterval(function(){
      aDivIndex++;
      if (aDivIndex==aDivs.length) {
        clearInterval(overTimer)
        aDivIndex=aDivs.length-1;
        
      } else {
        tools.removeClassName(aDivs[aDivIndex],'hidden');
        tools.addClassName(aDivs[aDivIndex],'show');
      }
      
    },600)
    
  }
        
  aDivs[0].onmouseout =function(){
    clearInterval(overTimer);
    tools.removeClassName(aDivs[aDivIndex],'show');
    tools.addClassName(aDivs[aDivIndex],'hidden');
    
    overTimer= setInterval(function(){
      aDivIndex--;
      if (aDivIndex==0) {
        clearInterval(overTimer)
        aDivIndex =1;
      } else {
        tools.removeClassName(aDivs[aDivIndex],'show');
        tools.addClassName(aDivs[aDivIndex],'hidden');
      }
      
    },500)
  
  }

/*------------------------------------列表功能块-------------------------------------------------------------------*/

  var oBox =document.getElementsByClassName("box")[0];
  var oList =document.getElementsByClassName("list")[0];
  var alis =oList.getElementsByTagName("li");
  var aDiv =oList.querySelectorAll("li >div");
  var oTitle=tools.ID(oList,'.title')[0];

  var oHeader =document.getElementById("header");
    
  var timers =null;
  var outTimers =null;
  var clientX ;
  var maxL =oList.offsetWidth/7*5;
  var btn =true;

//点击事件
  oList.onclick =function (ev) {
    var between ;
    var e =ev || event;
    
    if (tools.getParentclaaaName(e.target,"Li")) {
      var oLi =tools.getParentclaaaName(e.target,"Li");
    } else {
      return false;
    }
  
    if (btn) {
      oBox.id ="Box";
      between =oLi.parentNode.offsetLeft +oLi.parentNode.offsetWidth/2;
      between =tools.bodyVeiw().W/2-between;
      
      oList.style.cssText="-webkit-transform : translate3d(" +1.5* between + "px, 0, 0) scale(1.5);transform : translate3d(" +1.5* between + "px, 0, 0) scale(1.5)";
      for (var i =0;i<aDiv.length;i++) {
        aDiv[i].style.cssText = '-webkit-transition: -webkit-transform .4s cubic-bezier(0.445, 0.05, 0.55, 0.95); transition:transform .4s cubic-bezier(0.445, 0.05, 0.55, 0.95)';
        if (i<oLi.index) {
          aDiv[i].parentNode.className ="prev";
        } else if (i>oLi.index){
          aDiv[i].parentNode.className ="next";
        }
      }
      
      oLi.parentNode.className ="center";
      
      oHeader.style.marginTop ="-350px";
      oList.onmousemove =oList.onmouseout =null;
      
      oTitle.style.opacity=0;
    } else{
      oHeader.style.marginTop ="0px";
            
      oBox.id ="";
      for (var i =0;i<aDiv.length;i++) {
              
        aDiv[i].parentNode.className ="";
      }
        oList.removeAttribute("style")
        setTimeout(function (){
          oList.onmousemove =moveFun;
          oList.onmouseout =outFun;
        },500)
        
      oTitle.style.opacity=1;
    }
      btn =!btn;
  }

//移动事件
  oList.onmousemove =moveFun;
  oList.onmouseout =outFun;

  function moveFun (ev) {
    clearTimeout(outTimers)
    var events =ev || event;
    var distance,middle,t;
    
    clientX =events.clientX;
    
    cancelAnimationFrame(timers);
    timers =requestAnimationFrame(function (){
      for (var i =0;i<alis.length;i++) {
        alis[i].index =i;
        
        
        middle =alis[i].offsetWidth/2 +alis[i].offsetLeft;
        distance =Math.abs(clientX-middle);
  
        if (distance>maxL) {distance =maxL}
        var scale =Math.abs(distance/maxL);
        t =0;
        t =scale*60;
      
        aDiv[i].style.cssText = '-webkit-transform: translate3d(0, '+t+'%, 0) ; transform: translate3d(0,'+t+'%, 0);';
      }
    })
  }
  
  function outFun () {
    //加时间间隔
    outTimers =setTimeout(function(){
      cancelAnimationFrame(timers);
      for (var i =0;i<aDiv.length;i++) {
        aDiv[i].removeAttribute("style");
      }
    },100)
  }
  
}
