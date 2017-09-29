#import <Cordova/CDV.h>

@interface WiFiInfo : CDVPlugin

- (void)getConnectedWifiInfo:(CDVInvokedUrlCommand*)command;

@end
