function baseurl(req) {
    return "http://114.215.40.197/" + req;
    // return "http://192.168.0.109:8080/ADShop/"+req ;
    // return "http://192.168.0.119:8080/ADShop/"+req ;
}
var myLongitude = localStorage.getItem("myLongitude");
var myLatitude = localStorage.getItem("myLatitude");
var imgurl = "http://114.215.40.197/IMG/";

function mi_exit(ind) {
    //goBackView();
    window.history.go(ind);
}

function stringNull(obj) {
    if (obj == null || obj == "" || typeof(obj) == "undefined") {
        return true;
    } else {
        return false;
    }
}

function getzongjia(classname) {
    var array = $('.' + classname);

    for (var i = 0; i < array.size(); i++) {
        var m = array[i];
        if (m.innerHTML.indexOf('.') == -1) {
            m.innerHTML += ".00";
        }
    }


}

function isExistExpression(param) {
    var regRule = /\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g;
    if (param.match(regRule)) {
        // param = param.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
        showalert("不支持表情")
        return true;
    }
    return false;
}

function showalert(msg) {
    $('#errmsg').text(msg);
    $('#my-alert').modal();
}

function getValue(id) {
    var _value = $(id).val();
    return trim(_value);
}
//去左空格;   
function ltrim(s) {
    return s.replace(/(^\s*)/, "");
}
//去右空格;   
function rtrim(s) {
    return s.replace(/(\s*$)/, "");
}
//去左右空格;   
function trim(s) {
    return rtrim(ltrim(s));
}

function checktoken(data) {
    if (data.loginStatus == '未登录') {
        window.location.href = "login.html";
        return false;
    } else {
        return true;
    }

}

function baseimgurl(req) {

    return "http://114.215.40.197/IMG/" + req;
    //return "http://192.168.0.112:8080/ADShop/"+req ;
}

function gobackmain() {
    window.location.href = 'main.html';
}
function getScrollTop(){
	　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
	　　if(document.body){
	　　　　bodyScrollTop = document.body.scrollTop;
	　　}
	　　if(document.documentElement){
	　　　　documentScrollTop = document.documentElement.scrollTop;
	　　}
	　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
	　　return scrollTop;
	}
	//文档的总高度
	function getScrollHeight(){
	　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
	　　if(document.body){
	　　　　bodyScrollHeight = document.body.scrollHeight;
	　　}
	　　if(document.documentElement){
	　　　　documentScrollHeight = document.documentElement.scrollHeight;
	　　}
	　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
	　　return scrollHeight;
	}
	//浏览器视口的高度
	function getWindowHeight(){
	　　var windowHeight = 0;
	　　if(document.compatMode == "CSS1Compat"){
	　　　　windowHeight = document.documentElement.clientHeight;
	　　}else{
	　　　　windowHeight = document.body.clientHeight;
	　　}
	　　return windowHeight;
	}
