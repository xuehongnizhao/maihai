var exec = require('cordova/exec');

var baidumap_location = {
    getCurrentPosition: function (successCallback, errorCallback, options) {
        var win = function (p) {
            successCallback(p);
        };
        var fail = function (e) {
            errorCallback(e);
        };
        exec(win, fail, 'BaiduMapLocation', 'getCurrentPosition', options);
    }
};

module.exports = baidumap_location
