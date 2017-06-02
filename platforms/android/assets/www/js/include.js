document.write('<link rel="stylesheet" href="comm/amazeui/css/amazeui.min.css" />');
document.write('<link rel="stylesheet" href="comm/amazeui/css/app.css">');
document.write('<link rel="stylesheet" href="css/mobiscroll.custom-2.5.0.min.css">');
document.write('<link rel="stylesheet" href="css/div-overflow.css">');
document.write('<script src="comm/amazeui/js/jquery.min.js"></script>');
document.write('<script src="comm/amazeui/js/amazeui.min.js"></script>');
document.write('<script src="comm/js/ar_syscore.js"></script>');
document.write('<script src="comm/js/public.js"></script>');
document.write('<script src="comm/js/template.js"></script>');
document.write('<script src="comm/js/mobiscroll.custom-2.5.0.min.js"></script>');
document.write('<script type="text/javascript" src="js/Toast.js"></script>');
document.write('<script type="text/javascript" src="cordova.js"></script>');

function getParameter(param){  
	var query = window.location.search;//获取URL地址中？后的所有字符  
	var iLen = param.length;//获取你的参数名称长度  
	var iStart = query.indexOf(param);//获取你该参数名称的其实索引  
	if (iStart == -1)//-1为没有该参数  
		return "";  
	iStart += iLen + 1;  
	var iEnd = query.indexOf("&", iStart);//获取第二个参数的其实索引  
	if (iEnd == -1)//只有一个参数  
		return query.substring(iStart);//获取单个参数的参数值  
	return query.substring(iStart, iEnd);//获取第二个参数的值  
} 



var updateUrl ;
var serverVersion;
function checkUpdate(curversion){
	$.ajax({
		type : "post",
		url : url("AppVersion.getVersion"),
		dataType : "jsonp",
		jsonp : "callback",
		jsonpCallback : "version",
		success : function(json) {
			updateUrl = json.ver[0].file;
			serverVersion = json.ver[0].versioncode;
			if (serverVersion > curversion) {
				showAppUpdateConfirm();
			}
			
		},
		error : function() {
		}
	});
	
}

function updateApp(button) {
	// if press 'Yes'
	   if (button === 1){
		   updateFromServer(updateUrl, serverVersion, function(){}, function(){});
	   }
	}
	// PhoneGap Notification 提供的 Confirm API
function showAppUpdateConfirm() {
   navigator.notification.confirm(
       '有新版本，是否升级？',  // message
       updateApp,            // callback function
       '优惠宝',               // title
       '是,否'              // confirm 選項，用逗號隔開
	);
}
function initPush(){
	
}
