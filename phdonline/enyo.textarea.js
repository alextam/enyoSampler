enyo.kind({
	name: "enyo.textarea",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{
			classes:"inflatePadding",
			components: [
				{
					tag:"div",
					style:"height:15px;",
				},
				{
					tag:"h1",
					content:"Enter Your Server URL",
					classes:"orangeHeader",
				},
				{
					tag:"div",
					style:"width:100%",
 					kind: "FittableRows",
					components : [
						{
							kind: "onyx.InputDecorator", 
				   			classes:"inputDecorator resetBottom resetTop roundedTop roundedBottom",
				   			components: [
								{
									kind: "Input",
									id:"txtURL",
									name:"txtURL",
									classes:"inputFix",
									placeholder: "http://192.168.0.1:8080", 
									attributes: {
										required: "required"	
									} 
								},
							],
						},
					],
				},
				{
		   			kind: "onyx.Button", 
		   			content: "Click To Submit",
		   			classes: "orangeButton phdButton",
		   			style:"width:100%;margin-top:10px !important;margin-bottom:10px !important",
				},
				{
						tag: "div",
						style:"margin:10px !important",
						components: [
							{
								kind: "TextArea", 
								classes:"inputFix",
								placeholder: "Enter text here", 
								style:"width:100%;height:110px;",
								onchange:"inputChanged"
							}
						]
				},	 			
				{
					kind:"onyx.ToggleButton", 
					onChange:"toggleChanged",
					style:"float:right;margin-top:10px", 
					value: false
				},
			],
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
	toggleChanged: function(inSender,inEvent){
		inEvent.preventDefault();
	},
	refreshIt: function(){
		//Custom external function to refresh this component.
	},

});