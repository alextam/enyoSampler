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
							name:"registerAccountForm",
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
												required: "email"	
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
												required: "password"	
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
												required: "cpassword",
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
									content:"Enter Lot/House No",
									classes:"orangeHeader",
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop roundedTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							id:"txtUnitNo",
				 							name:"txtUnitNo",
				 							classes:"inputFix",
											placeholder: "Lot/House No",
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
				 							id:"txtStreetUnit",
				 							name:"txtStreetUnit",
				 							classes:"inputFix",
											placeholder: "Street Unit", 
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
		if ( localStorage.getObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE") != null ){
			//AppStorage Available.
			this.populateFields( localStorage.getObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE") );
		}
 	},
 	populateFields : function( storageAddress ){
 		this.$.txtStreetUnit.setValue( storageAddress.cboStreetUnit );
		this.$.txtStreetName.setValue( storageAddress.txtStreetName );
		this.$.txtState.setValue( storageAddress.cboState );
		this.$.txtSuburb.setValue( storageAddress.txtSuburb );
		this.$.txtComplex.setValue( storageAddress.txtComplex );
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

 			case "txtUnitNo":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(300);
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
 		var self = this;
 		inEvent.preventDefault();
 		this.validateUtil = new enyo.validator(); 
 		var allValidComponents = this.validateUtil.validate(this.$.registerAccountForm,onSuccessValidate,onErrorValidate);
		function onSuccessValidate(results){
			var registerPayload = new Object();
			registerPayload.txtEmail = self.$.txtEmail.getValue();  
			registerPayload.txtPassword = self.$.txtPassword.getValue();
			registerPayload.txtFullName = self.$.txtFullName.getValue();
			registerPayload.txtContactNo = self.$.txtContactNo.getValue();
			registerPayload.txtUnitNo = self.$.txtUnitNo.getValue();
			registerPayload.txtStreetUnit = self.$.txtStreetUnit.getValue();
			registerPayload.txtStreetName = self.$.txtStreetName.getValue();
			registerPayload.txtState = self.$.txtState.getValue();
			registerPayload.txtSuburb = self.$.txtSuburb.getValue();
			registerPayload.txtComplex = self.$.txtComplex.getValue();

			console.log('DONE..Payload is '+JSON.stringify(registerPayload));
		}
		function onErrorValidate(results){
			alert("Please fill up the fields with valid input to proceed");
			for (var i = 0; i < results.errors.length; i++) {
				results.errors[i].controller.setValue("");
				results.errors[i].controller.setAttribute("placeholder", results.errors[i].message);		
			};		
		}
		//alert('register account');	
 	},
 	handleBtnBack : function(inSender, inEvent) {
 		inEvent.preventDefault();
 		new register.address().renderInto( document.body );
 	},
 	
});