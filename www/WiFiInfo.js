var exec = require('cordova/exec');
var platform = require('cordova/platform');
var interval_index = null;

/**
 * Provides access to wifi on the device.
 */
var wifi = {

    getConnectedWifiInfo: function(successFunc,errorFunc){
        cordova.exec(successFunc,errorFunc,"WiFiInfo","getConnectedWifiInfo",[]);
    },

};
module.exports = wifi;
