var PhoneGapBridge = {};
/************************************************************************
Name : PhoneGapBridge
Dependency : phonegap.bridge.js
Version : 1.1
*************************************************************************/

(function(){
	var DEBUGMODE = true;
	var DEVICEREADY = false;
	var APPNAME = "POCKETAPP";
	
	PhoneGapBridge.debugLog = function(value){
		if ( DEBUGMODE ){
			console.log( value );
		}
	};
	
	PhoneGapBridge.activityIndicator = function(value){
		PhoneGapBridge.debugLog('.. activityIndicator : '+ value +' ..');
		if(value){
			try {
				//$.mobile.showPageLoadingMsg("b", "Loading...");
				$.mobile.loading( 'show' );
			} catch (e){
				//$.mobile.showPageLoadingMsg("b", "Loading...");
				$.mobile.loading( 'show' );
			}
		} else {
			try {
				//$.mobile.hidePageLoadingMsg();
				$.mobile.loading( 'hide' );
			} catch (e){
				//$.mobile.hidePageLoadingMsg();
				$.mobile.loading( 'hide' );
			}
		}
	};
	
	PhoneGapBridge.initFB = function(){
		if (AppGlobalData.getDeviceReady()){
			try {
           	 	FB.init({ appId: "157860324339433", nativeInterface: CDV.FB, useCachedDialogs: false });
            } catch (e) {
            	//PhoneGapBridge.alertMsg(e);
            	PhoneGapBridge.alertMsg(LocaleSettings.getString("FBCONNECT_INTERRUPT_ERROR_MESSAGE"));
            }
        }
   };
	
	PhoneGapBridge.fbConnect = function(){
		FB.login(
			function(response) {
				 if (response.status == "connected") {
				 	AppGlobalData.saveAccessToken(response.authResponse.accessToken);
				 	UserProfileControl.fbGraphPullMeDataToPage('register.html');
                 } else {
                 	PhoneGapBridge.alertMsg(LocaleSettings.getString("FBCONNECT_INTERRUPT_ERROR_MESSAGE"));
                 	PageControl.goURL('index.html');
                 }
             },
             { scope: "email" }
  		);	
	};
	
	PhoneGapBridge.fbAppRequest = function(){
		FB.ui({
    		method: 'apprequests',
    		message: 'Invite Friends To GameStacker',
  		}, 
		function(response) { 
		    console.log(JSON.stringify(response));
		});
	};
	
	PhoneGapBridge.doPushRegCheck = function(){
		   var push = window.pushNotification;
	       if (push != null){
	       		//alert('.. UA Plugin is ready ..');
	       		push.getPushID(onPushReady);
	       		function onPushReady(pushID){
	       			if ((AppGlobalData.getPushID() == null) && (pushID != "")){
	       				AppGlobalData.setPushID(pushID);
	       				alert("SET to LocalStorage : " + AppGlobalData.getPushID());
	       			} 
	       		}
	       } else {
	       			//PhoneGapBridge.debugLog('.. UA Plugin not ready ..');
	       }
        	
	};
	
	PhoneGapBridge.setAppName = function(name){
		PhoneGapBridge.debugLog('.. Setting App Name To : '+ name +' ..');
		APPNAME = name;
	};
	
	PhoneGapBridge.attachResumeEvent = function(callBackResumeFunction){
		// Only attach once device is ready.
		if (PhoneGapBridge.detectClient() != "mac"){
			document.addEventListener("resume", onResume, false);
			function onResume(){
				PhoneGapBridge.debugLog('.. OnApp Resume ..');
				callBackResumeFunction.call();
			}
		}
	};
	
	PhoneGapBridge.attachBackButtonEvent = function(callBackBackButtonFunction){
		if (PhoneGapBridge.detectClient() == "android"){
			document.addEventListener("backbutton", function(e){
				e.preventDefault();
				PhoneGapBridge.debugLog('.. BackButton Pressed ..');
				callBackBackButtonFunction.call();
			});
		}
	};
	
	PhoneGapBridge.detectClient = function(){
		var ua = navigator.userAgent;
		PhoneGapBridge.debugLog(" .. PhoneGapBridge Client : "+ ua + " .. ");
		if (ua.match(/(iPhone|iPod|iPad)/)) {
				return "ios";
		} else if (ua.match(/Android/)) {
				return "android";
		} else if (ua.match(/BlackBerry/)) {
				return "blackberry";
		} else if (ua.match(/Intel Mac/)) {
				return "mac";
		}
	};
	
	PhoneGapBridge.internetConnectionCheck = function(){
		if (PhoneGapBridge.detectClient() == "mac"){
			// Always online
			return true;
		} else {
			if (AppGlobalData.getDeviceReady()){
				var networkState = navigator.network.connection.type;
			    switch( networkState ){
			       case "unknown":
			        	return false;
			       break;

			       case "none":
			        	return false;
			       break;

			       default:
			        	return true;
			       break;
			    }
		   } else {
		   		//PhoneGap not ready but need to test Online Status Quickly
		   		var online = navigator.onLine;
		   		if (online){
	     			return true;
	     		} else {
	     			return false;
	     		}
		   }
		 }
	};
	
	PhoneGapBridge.promptOKCancel = function( title, message, confirmCallBack ){
			if (PhoneGapBridge.detectClient() == "mac"){
				var status = confirm( message );
				if ( status==true ) {
					confirmCallBack.call( this, 1 );
				} else {
					confirmCallBack.call( this, 2 );
				}
			} else {
				// PhoneGap Bridge Mode
				navigator.notification.confirm(message, onConfirm, title, 'Ok,Cancel');
				function onConfirm(index){
					confirmCallBack.call( this, index );
				}
			}
	};
	
	PhoneGapBridge.activateScanner = function(){
		if (AppGlobalData.getDeviceReady()){
			try {
				window.plugins.barcodeScanner.scan( function(result) {
			            alert("We got a barcode\n" +
			                      "Result: " + result.text + "\n" +
			                      "Format: " + result.format + "\n" +
			                      "Cancelled: " + result.cancelled);
			        }, function(error) {
					    alert("Scanning failed: " + error);
				    }
				 );
			} catch(e) {
				// Do Nothing
			}	
		}
	};
	
	PhoneGapBridge.activateCamera = function(placeholderDiv, callBackSuccess, callBackFail){
		if (AppGlobalData.getHWSettings() != null){
			if (String(AppGlobalData.getHWSettings().usecamera) == "true"){
				//CAMERA MODE;
				if (AppGlobalData.getDeviceReady()){
					try {
						var pictureSource = AppGlobalData.getPictureSource().CAMERA;
						var destinationType = AppGlobalData.getDestinationType().FILE_URI;
						PhoneGapBridge.activityIndicator(true);
							
						navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 85, destinationType: destinationType, sourceType: pictureSource, correctOrientation: true,  targetWidth:100, targetHeight:100 });
						function onPhotoURISuccess( imageData ){
							PhoneGapBridge.activityIndicator(false);
							callBackSuccess.call(this,imageData);
							imageData = null;
						}
						function onFail (error) {
							PhoneGapBridge.activityIndicator(false);
							callBackFail.call(this, error);
							error = null;
						}
					}catch(e){
						// Do Nothing
					}
				}
			} else {
				//LIBRARY MODE;
				if (AppGlobalData.getDeviceReady()){
					try {
						var pictureSource = AppGlobalData.getPictureSource().PHOTOLIBRARY;
						var destinationType = AppGlobalData.getDestinationType().FILE_URI;
						PhoneGapBridge.activityIndicator(true);
							
						navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 85, destinationType: destinationType, sourceType: pictureSource, correctOrientation: true,  targetWidth:100, targetHeight:100 });
						function onPhotoURISuccess( imageData ){
							PhoneGapBridge.activityIndicator(false);
							callBackSuccess.call(this,imageData);
							imageData = null;
						}
						function onFail (error) {
							PhoneGapBridge.activityIndicator(false);
							callBackFail.call(this, error);
							error = null;
						}
					}catch(e){
						// Do Nothing
					}
				}
			}
		} else {
			// Most Likely wont happen;
			// LIBRARY MODE BY DEFAULT;
			if (AppGlobalData.getDeviceReady()){
					try {
						var pictureSource = AppGlobalData.getPictureSource().PHOTOLIBRARY;
						var destinationType = AppGlobalData.getDestinationType().FILE_URI;
						PhoneGapBridge.activityIndicator(true);
							
						navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 85, destinationType: destinationType, sourceType: pictureSource, correctOrientation: true, targetWidth:100, targetHeight:100 });
						function onPhotoURISuccess( imageData ){
							PhoneGapBridge.activityIndicator(false);
							callBackSuccess.call(this,imageData);
							imageData = null;
						}
						function onFail (error) {
							PhoneGapBridge.activityIndicator(false);
							callBackFail.call(this, error);
							error = null;
						}
					}catch(e){
						// Do Nothing
					}
			}	
		}
	};
	
	PhoneGapBridge.alertMsg = function(msg){
		try{
			navigator.notification.alert( msg,  alertDismissed, 'GameStacker', 'Ok' );
			function alertDismissed(){
				//Do Nothing;
			}
		} catch(e){
			alert(msg);
		}
	};
	
	PhoneGapBridge.getMyLocation = function(onSuccessCallBack, onFailCallBack){
 		if (AppGlobalData.getDeviceReady()){
 			function onSuccess(position) {
				PhoneGapBridge.debugLog(" .. Getting Position Ok .. ");
			   	onSuccessCallBack.call(this,position);
			}
			
			function onError(error) {
				PhoneGapBridge.debugLog(" .. Getting Position Failed .. ");
			    onFailCallBack.call(this,error);
			}
			
			navigator.geolocation.getCurrentPosition(onSuccess, onError, {timeout: 10000} );
		}
	};
	
	PhoneGapBridge.exitApp = function(){
		PhoneGapBridge.promptOKCancel('Exiting App','Do You Want To Exit?', onButtonPressed );
		function onButtonPressed(index){
			if (index == 1){
				navigator.app.exitApp();
			} else {
				//Do Nothing;
			}
		}
	};
})();