/************************************************************************/
/* Form Handling in android is different, from IOS, they do not have    */
/* zoom to focus feature, so, we have to bind onFocus and Scroll T  o   */
/* the area. Only apply this rule, when the form input element is below */
/* 50%.                                                                 */
/************************************************************************/
enyo.kind({
	name: "register.account",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
 	components: [
 		{
			kind: "onyx.Toolbar",
			classes:"phdStd45px explode",			
				components: [
 					{
 						kind:'Button',
 						name:'btnBack',
 						ontap:'handleBtnBack',
 						classes: "phdTinyLogo", 
 						style:"margin-top:5px;width:154px;height:35px;"
 					}
				]
		},
		{   	
			kind: "Scroller",
			fit:true,
			touch:true, 
			thumb:false,
			name: "createAccountScroll",
 			ondrag:"resetZoomFromInput",
			components: [
				{	
						classes:'inflatePadding',
						components: [
						{ 
							tag:"div",
							id:"registerAccountForm",
				   			kind: "FittableRows",
				   			components:[
				   				{
									tag:"h1",
									content:"Login Details",
									classes:"orangeHeader",
								},
				   				{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom roundedTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtEmail",
				 							name:"txtEmail",
				 							classes:"inputFix",
											placeholder: "Email", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "required"	
											} 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop resetBottom",
						   			components: [
										{
											kind: "Input",
											type:"password",
				 							id:"txtPassword",
				 							name:"txtPassword",
				 							classes:"inputFix",
											placeholder: "Password", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "required"	
											} 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop roundedBottom",
						   			components: [
										{
											kind: "Input",
											type:"password",
				 							id:"txtCPassword",
				 							name:"txtCPassword",
				 							classes:"inputFix",
											placeholder: "Confirm Password", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "required"	
											} 
				 						},
									]
								},
								{
									tag:"div",
									style:"height:10px",
								},
								{
									tag:"h1",
									content:"Personal Details",
									classes:"orangeHeader",
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom roundedTop",
						   			components: [
										{
											kind: "Input",
 				 							id:"txtFullName",
				 							name:"txtFullName",
				 							classes:"inputFix",
											placeholder: "Full Name", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "required"	
											} 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop roundedBottom",
						   			components: [
										{
											kind: "Input",
 				 							id:"txtContactNo",
				 							name:"txtContactNo",
				 							classes:"inputFix",
											placeholder: "Contact No", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "required"	
											} 
				 						},
									]
								},
								{
									tag:"div",
									style:"height:10px",
								},
								{
									tag:"h1",
									content:"Delivery Address",
									classes:"orangeHeader",
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom roundedTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtUnit",
				 							name:"txtUnit",
				 							classes:"inputFix",
											placeholder: "Lot/House No", 
											attributes: {
												readonly: "true"	
											} 
											 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtStreetName",
				 							name:"txtStreetName",
				 							classes:"inputFix",
											placeholder: "Street Name", 
											attributes: {
												readonly: "true"	
											} 
											 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtState",
				 							name:"txtState",
				 							classes:"inputFix",
											placeholder: "State", 
											attributes: {
												readonly: "true"	
											} 
											 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtSuburb",
				 							name:"txtSuburb",
				 							classes:"inputFix",
 											attributes: {
												readonly: "true"	
											} 
											 
				 						},
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							id:"txtComplex",
				 							name:"txtComplex",
				 							classes:"inputFix",
 											attributes: {
												readonly: "true"	
											} 
											 
				 						},
									]
								},
				   			],
						},
						{
							tag:"div",
							name:"jack",
							style:"height:300px",
						},
						
					], //End Main Component
				},

			],

		},
		{
			kind: "onyx.Toolbar",
			classes:"phdStd45px explode",
				components: [
 					{
 						kind: "onyx.Button",
 						classes:"explode greenButton phdButton fullWidth resetTop",
 						fit:true, 
 						onclick:"registerAll",
 						content: "Register",
 					},
				]
		},
	],
	create: function(inSender, inEvent) {
		this.inherited(arguments);
		
 	},
 	zoomToInput : function (inSender, inEvent) {
 		// console.log(inSender);
 		switch(inSender.name) {
 			case "txtContactNo":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 			break;
 			case "txtFullName":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 			break;
 		}
 	},
	pickerHandler : function (inSender, inEvent) {
		//inEvent.preventDefault();
	},

 	resetZoomFromInput : function(inSender, inEvent) {
 		inEvent.preventDefault();
 		inSender.hasNode().blur();
 		this.$.createAccountScroll.setScrollTop(0);
 	},
 	registerAll: function(inSender, inEvent) {
		alert('register account');	
 	},
 	handleBtnBack : function(inSender, inEvent) {
 		//inEvent.preventDefault();
 		new register.address().renderInto( document.body );
 	},
 	
});