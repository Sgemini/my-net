//获取当前页面的宽高度
var tools ={
	bodyVeiw:function(){
		return {
			H:document.body.clientHeight || document.documentElement.clientHeight,
			W:document.body.clientWidth || document.documentElement.clientWidth
		}
	},
	
	addEvent:function (obj,val,fn) {
			if (obj.addEventListener) {
				obj.addEventListener(val,fn,false);
			} else if (obj.attachEvent){
				obj.attachEvent("on"+val,function(){
					fn.call(obj)
				})
		}
	},
	
	veiwCneter:function(obj){
		obj.style.position ="absolute";
		obj.style.left =tools.bodyVeiw().W/2+"px";
		obj.style.marginLeft =-obj.offsetWidth/2+"px";
	},
	
	ID:function(obj,val){
		var id =val.substring(0,1);
		var str =val.substr(1);
		var childs;
		
		switch(id){
			case ".":
				childs =obj.getElementsByClassName(str);
			break;
			
			case "#":
				return document.getElementById(str);
			break;
			
			default:
				childs =obj.getElementsByTagName(val);
		}
		return childs;
	},
	
	/*speed为匀速，swing为摆动*/
	animate:function(obj,json,stl,During,Ending){
		if (!obj.timer){obj.timer =null};
		clearInterval(obj.timer);
		var moveFn =null;
		
		switch (stl){
			case "speed":
				moveFn =function(){speedFn(obj,json,stl,During,Ending)};
			break;
				
			case "swing":
				moveFn =function(){swingFn(obj,json,stl,During,Ending)};
			break;
		}
		
		obj.timer=setInterval(moveFn,30);
		
		function speedFn (obj,json,stl,During,Ending){
			var icur,ispeed,attr;
			
			for (attr in json) {
				if (attr =="opacity") {
					
					icur =parseInt(parseFloat(tools.getStyle(obj,attr))*100);
				} else{
					icur =parseInt(tools.getStyle(obj,attr));
				}
				
				
				ispeed =(json[attr]-icur)/8;
				
				ispeed =ispeed>0?Math.ceil(ispeed):Math.floor(ispeed);
				
				if (icur ==json[attr]) {
					clearInterval(obj.timer);
					if (Ending) {
						Ending.call(obj);
					}
					
				} else{
					if (attr =="opacity") {
						obj.style[attr] =(icur+ispeed)/100;
						obj.style.filter ="alpha(opacity:"+(icur+ispeed)+")";
					} else{
						obj.style[attr] =(icur+ispeed)+"px";
					}
				}
				
				if (During) {
					During.call(obj);
				}
			}
			
			
		}
		
		function swingFn (obj,json,stl,During,Ending) {
			var icur=0;
			var btn =true;
			
			for (var attr in json) {
				if (!obj.ispeed) {obj.ispeed={}};
				if (!obj.ispeed[attr]) {obj.ispeed[attr]=0};
			
				icur =tools.Css(obj,attr);
				
				if (Math.abs(json[attr]-icur)>1 || Math.abs(obj.ispeed[attr]) >1) {
					btn =false;
					
					obj.ispeed[attr] +=(json[attr]-icur)/8;
					obj.ispeed[attr] *=0.8;
					
					var maxIspeed =50;
					
					if (Math.abs(obj.ispeed[attr])>maxIspeed) {
						obj.ispeed[attr] =obj.ispeed[attr]>0?maxIspeed:-maxIspeed;
					}
					
					tools.Css(obj,attr,(icur+obj.ispeed[attr]));
				} 
			}
			
			if (btn) {
				clearInterval(obj.timer)
				tools.Css(obj,attr,json[attr]);
				if (Ending) {
					Ending.call(obj);
				}
			}
			
			if (During) {
				During.call(obj);
			}
		}
		
	},
	
	getStyle:function(obj,attr){
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else{
			return getComputedStyle(obj,false)[attr];
		}
	},
	
	Css:function(obj,attr,val){
		if (arguments.length==2) {
			if (typeof attr =="object") {
				for (var str in attr) {
					if (str =="opacity") {
						obj.style[str] =attr[str]/100;
						obj.style.filter ="alpha(opacity:"+attr[str]+")";
					} else{
						obj.style[str] =attr[str]+"px";
					}
				}
			} else{
				if (attr =="opacity") {
					return parseInt(parseFloat(tools.getStyle(obj,attr))*100);
				} else{
					return parseInt(tools.getStyle(obj,attr));
				}
			}
		} else{
			obj.style[attr] =val+"px";
		}
	},

	hassClassName:function(obj,cls){
		if (obj.className ==""){return false;}
		var arr =obj.className.split(" ");
		
		for (var i =0;i<arr.length;i++) {
			if (arr[i] ===cls) {
				return true;
			}
		}
		return false;
	},
	
	addClassName:function (obj,cls){
		if (!tools.hassClassName(obj,cls)) {
			obj.className +=" "+cls;
			return true;
		} else {
			return false;
		}
	},
	
	removeClassName:function(obj,cls){
		
		if (tools.hassClassName(obj,cls)) {
			var arr =obj.className.split(" ");
			for (var i =0;i<arr.length;i++) {
				if (arr[i] ===cls) {
					arr.splice(i,1);
					obj.className =arr.join(" ");
					return true;
				}
			}
		} else{
			return false;
		}
	},
	
	tollageClassName:function(obj,cls){
		if (tools.hassClassName(obj,cls)) {
			tools.removeClassName(obj,cls);
		} else{
			tools.addClassName(obj,cls);
		}
	},
	
	each:function(arr,fn){
		for (var i =0;i<arr.length;i++) {
			fn(arr[i],i);
		}
	},
	
	addEventFn:function(obj,str,fn){
		if (obj.addEventListener) {
			obj.addEventListener(str,fn,false);
		} else{
			obj.attachEvent("on"+str,fn);
		}
	},
	
	removeEventFn:function(obj,str,fn){
		if (obj.addEventListener) {
			obj.removeEventListener(str,fn,false);
		} else{
			obj.detachEvent("on"+str,fn);
		}
	},
	
	attr:function(obj,str,val){
		if (arguments.length==3) {
			obj.setAttribute(str,val);
		} else{
			return obj.getAttribute(str);
		}
	},
	
	getParentclaaaName:function(obj,cls){
		if (obj.nodeName =="#document") {return false;}
		while (!tools.hassClassName(obj,cls)){
			obj=obj.parentNode;
			if (obj.nodeName =="#document") {
				return false;
			}
		}
		return obj;
	},
	
	DocumentWH:function(){
		return {
			W:document.documentElement.clientWidth || document.body.clientWidth,
			H:document.documentElement.clientHeight || document.body.clientHeight
		}
	}
}










