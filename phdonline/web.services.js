enyo.kind({
	name: "web.services",
	components: [
		{   
			kind: "WebService", 
			name:"yql", 
			url: "http://query.yahooapis.com/v1/public/yql?format=json", 
			onResponse:"processResponse",
			onError:"", 
			callbackName: "callback",	
		},		
	],
	processResponse: function(inSender, inEvent) {
		// do something with it
		this.$.textArea.setValue(JSON.stringify(inEvent.data, null, 2));
	}
});