enyo.kind({
	name: "special.order",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
 	components: [
 				{   	
					kind: "Scroller",
					name: "drawerTestScroller",
					fit:true,
					touch:true, 
					thumb:false,
						components: [
							{
								classes:"inflatePadding",
								components: [
									{	
										tag:"div",
										style:"height:15px;",
									},	
									{	
										content: "<h1>Activate Drawer #1</h1>",
										name:"drawerPlaceHolder",
										allowHtml: true, 
										classes:"selectDecorator resetBottom resetTop roundedTop icoArrow down roundedBottom",
										ontap:"activateDrawer"
									},
									{
										kind: "onyx.Drawer",
										name: "drawer", 
										animated: true, 
										open:false,
										classes:"drawerBg roundedBottom",
										components: [
											{
									   			kind: "onyx.InputDecorator",
									   			classes:"drawerDecorator roundedBottom", 
									   			components: [
													{
														kind: "Input",
							 							id:"txtInputName1",
							 							name:"txtInputName1",
							 							classes:"inputFix ",
														placeholder: "Enter Value", 
														onfocus:"zoomToInput",
														onblur:"resetZoomFromInput",
														attributes: {
															required: "required"	
														} 
							 						},
												]
											},
											{
												tag:"h1",
												content:"Enter Content Above",
												classes:"orangeHeader",
											},
										]
									},
									{	
										tag:"div",
										style:"height:30px;",
									},
									{	
										content: "<h1>Activate Drawer #2</h1>",
										name:"drawerPlaceHolder2",
										allowHtml: true, 
										classes:"selectDecorator resetBottom resetTop roundedTop icoArrow down roundedBottom",
										ontap:"activateDrawer2"
									},
									{
										kind: "onyx.Drawer",
										name: "drawer2", 
										animated: true, 
										open:false,
										classes:"drawerBg roundedBottom",
										components: [
											{
									   			kind: "onyx.InputDecorator",
									   			classes:"drawerDecorator roundedBottom", 
									   			components: [
													{
														kind: "Input",
							 							id:"txtInputName2",
							 							name:"txtInputName2",
							 							classes:"inputFix ",
														placeholder: "Enter Value", 
														onfocus:"zoomToInput",
														onblur:"resetZoomFromInput",
														attributes: {
															required: "required"	
														} 
							 						},
												]
											},
											{
												tag:"h1",
												content:"Enter Content Above",
												classes:"orangeHeader",
											},
										]
									},
									{	
										tag:"div",
										style:"height:30px;",
									},
									{	
										content: "<h1>Activate Drawer #3</h1>",
										name:"drawerPlaceHolder3",
										allowHtml: true, 
										classes:"selectDecorator resetBottom resetTop roundedTop icoArrow down roundedBottom",
										ontap:"activateDrawer3"
									},
									{
										kind: "onyx.Drawer",
										name: "drawer3", 
										animated: true, 
										open:false,
										classes:"drawerBg roundedBottom",
										components: [
											{
									   			kind: "onyx.InputDecorator",
									   			classes:"drawerDecorator roundedBottom", 
									   			components: [
													{
														kind: "Input",
							 							id:"txtInputName3",
							 							name:"txtInputName3",
							 							classes:"inputFix ",
														placeholder: "Enter Value", 
														onfocus:"zoomToInput",
														onblur:"resetZoomFromInput",
														attributes: {
															required: "required"	
														} 
							 						},
												]
											},
											{
												tag:"h1",
												content:"Enter Content Above",
												classes:"orangeHeader",
											},
										]
									},
									{	
										tag:"div",
										name:"jack",
										style:"height:50px;",
									},
								],
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
	activateDrawer: function(inSender,inEvent){
		this.$.drawer.setOpen(!this.$.drawer.open);
		if (this.$.drawer.open){
			this.$.drawerPlaceHolder.removeClass("roundedBottom");
		} else {
			this.$.drawerPlaceHolder.addClass("roundedBottom");
		}
	},
	activateDrawer2: function(inSender,inEvent){
		this.$.drawer2.setOpen(!this.$.drawer2.open);
		if (this.$.drawer2.open){
			this.$.drawerPlaceHolder2.removeClass("roundedBottom");
		} else {
			this.$.drawerPlaceHolder2.addClass("roundedBottom");
		}
	},
	activateDrawer3: function(inSender,inEvent){
		this.$.drawer3.setOpen(!this.$.drawer3.open);
		if (this.$.drawer3.open){
			this.$.drawerPlaceHolder3.removeClass("roundedBottom");
		} else {
			this.$.drawerPlaceHolder3.addClass("roundedBottom");
		}
	},
	refreshIt: function(){
		//Custom external function to refresh this component.
	},
});
