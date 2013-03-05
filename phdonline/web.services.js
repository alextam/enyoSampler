enyo.kind({
	name: "your.componentName",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{   
			content:"Hello World",
			fit:true,	
		},		
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff onCreate
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff afterRendered
	},
	refreshIt: function(){
		//Custom external function to refresh this component.
	},
});