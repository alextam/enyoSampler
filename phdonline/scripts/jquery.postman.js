var PostMan = {};
/************************************************************************
Name : PostMan Connection Util
Dependency : jQuery 1.6.4+
*************************************************************************/

(function($){
		var TIMEOUT 	    = 16000; //16 seconds.
		var INTERNETREADY   = true;
		var SILENTALERTMODE = false;
		
		PostMan.setTimeOut = function( value ){
			TIMEOUT = value;
		};
		
		PostMan.generateJSONAuth = function ( username, password ){
			var token = username + ':' + password;
			var hash = PostMan.base64_encode(token);
			return "Basic " + hash;
		};
		
		PostMan.postJSONP = function(url, callBackSuccessFunc, callBackFailFunc ){
			if(INTERNETREADY){
				var payLoad = {};
				var connection = $.ajax({
				  	url:url,
				  	type:'GET',
				  	data:payLoad,
				  	timeout:TIMEOUT,
				  	dataType: "jsonp",
				  	contentType:'application/json'
			 	});
			 	
			 	connection.done( function( response ) { 
					callBackSuccessFunc.call(this , response);
				});
				
				connection.fail( function( error ) { 
					callBackFailFunc.call(this , error);
				}); 
			} else {
				PostMan.handleOfflineMode();
			}
		};
		
		PostMan.postTo = function( url, object, callBackSuccessFunc, callBackFailFunc, type, contentType ){
			// JSON when using this function
			if(INTERNETREADY){
				var myContentType;
				var payLoad;
				if( arguments.length > 5 ){
					myContentType = 'application/json';
				} else {
					myContentType = 'application/x-www-form-urlencoded';
				}
				if (myContentType == 'application/x-www-form-urlencoded'){
					payLoad = jQuery.param(object);
				} else {
					payLoad = JSON.stringify(object);
				}
				console.log(payLoad);
				var connection = $.ajax({
				  	url:url,
				  	type:type,
				  	data:payLoad,
				  	timeout:TIMEOUT,
				  	contentType:myContentType
			 	});
			 	
				connection.done( function( response ) { 
					callBackSuccessFunc.call( this, response );
					payLoad = ""; 
				});
				connection.fail( function( response, status, error ) { 
					callBackFailFunc.call( this, response ); 
					payLoad = "";
				});
			} else {
				PostMan.handleOfflineMode();
			}
		};
		
		PostMan.postToWithAuth = function( url, authObject, object, callBackSuccessFunc, callBackFailFunc, type, contentType ){
			if(INTERNETREADY){
				var myContentType;
				var payLoad;
				  
				if ( arguments.length > 6 ){
						myContentType = 'application/json';
				} else {
						myContentType = 'application/x-www-form-urlencoded';
				}
				var myToken = PostMan.generateJSONAuth( authObject.username, authObject.password  );
				if (myContentType != 'application/x-www-form-urlencoded'){
					//Not A Form
					payLoad = JSON.stringify(object);
				} else {
					payLoad = jQuery.param( object );
				}
				var connection = $.ajax({
				  	url: url,
				  	type: type,
				  	data: payLoad,
				  	timeout:TIMEOUT,
				  	async:true,
					contentType: myContentType,
				  	beforeSend : function(req) {
						req.setRequestHeader('Authorization', myToken);
				  	}
			 	});
				
				connection.done( function( response ) { 
					callBackSuccessFunc.call( this, response ) ;
					payLoad = "";
				});
				connection.fail( function( response, status, error ) { 
					callBackFailFunc.call( this, response ); 
					payLoad = "";
				});
			} else {
				PostMan.handleOfflineMode();
			}
		};
		
		PostMan.tailPost = function(url, stringToAppend, callBackSuccessFunc, callBackFailFunc){
			if(INTERNETREADY){
				var connection = $.ajax({
				  	url:url+"?"+stringToAppend,
				  	type:'POST',
				  	timeout:TIMEOUT,
			 	});
			 	connection.done( function( response ) { 
					callBackSuccessFunc.call( this, response ); 
				});
				
				connection.fail( function( response, status, error ) { 
					callBackFailFunc.call( this, response ); 
				});
			}
		};
				
		PostMan.handleOfflineMode = function(){
			// Fire a warning unable to detect Internet - Do Nothing;
		};
		
		PostMan.base64_encode = function (data) {
		    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
		        ac = 0,
		 		enc = "",
		        tmp_arr = [];

		    if (!data) {
		        return data;
		    }

		    do { // pack three octets into four hexets
		        o1 = data.charCodeAt(i++);
		        o2 = data.charCodeAt(i++);
		        o3 = data.charCodeAt(i++);
				bits = o1 << 16 | o2 << 8 | o3;

		        h1 = bits >> 18 & 0x3f;
		        h2 = bits >> 12 & 0x3f;
		        h3 = bits >> 6 & 0x3f;
		        h4 = bits & 0x3f;

		        // use hexets to index into b64, and append result to encoded string
		        tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
		    } while (i < data.length);

		    enc = tmp_arr.join('');
		    var r = data.length % 3;
		    return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
		};
})(jQuery);