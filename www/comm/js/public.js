function baseurl(req){
	return "http://114.215.40.197/"+req;
	// return "http://192.168.0.109:8080/ADShop/"+req ;
}
var myLongitude = localStorage.getItem("myLongitude");
var myLatitude = localStorage.getItem("myLatitude");
var imgurl = "http://114.215.40.197/IMG/"; 
function mi_exit(ind){
	//goBackView();
	window.history.go(ind);
}
function stringNull(obj) {
	if (obj == null || obj == "" || typeof(obj) == "undefined") {
		return true;
	}else{
		return false;
	}
}
function showalert(msg) {
    $('#errmsg').text(msg);
    $('#my-alert').modal();
}

function getValue(id){
	var _value = $(id).val();
	return trim(_value);
}
 //去左空格;   
function ltrim(s){     
    return s.replace(/(^\s*)/, "");  
 }   
 //去右空格;   
function rtrim(s){   
  return s.replace(/(\s*$)/, "");  
}   
 //去左右空格;   
 function trim(s){  
  return rtrim(ltrim(s));   
 }
 function checktoken(data){
	if(data.loginStatus == '未登录'){
		 window.location.href="login.html";
		 return false;
	}else{
		return true;
	}
	 
 }
 
 function baseimgurl(req){

	return "http://114.215.40.197/IMG/"+req;
	//return "http://192.168.0.112:8080/ADShop/"+req ;
}
 function gobackmain(){
	 window.location.href = 'main.html';
 }