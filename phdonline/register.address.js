/************************************************************************/
/* Form Handling in android is different, from IOS, they do not have    */
/* zoom to focus feature, so, we have to bind onFocus and Scroll T  o   */
/* the area. Only apply this rule, when the form input element is below */
/* 50%.                                                                 */
/************************************************************************/
enyo.kind({
	name: "register.address",
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
							tag:"p",
							classes:"instruction",
							content:"Please enter your address to locate your delivery address accurately.",
						},
						{ 
							tag:"div",
							id:"registerAddressForm",
				   			kind: "FittableRows",
				   			components:[
				   				{
									tag:"h1",
									content:"Street",
									classes:"orangeHeader",
								},
				   				{
									 kind: "onyx.PickerDecorator", 
 									 classes:"selectDecorator resetBottom roundedTop icoArrow down inputFix",
									 onSelect: "pickerHandler",
									 components: [
										{
											content: "Pick One...",
											classes: "fullWidth resetBottom roundedTop",
											style:"background:none;color:#ffffff;font-weight:600;text-align:left;",
										},
										{
											 kind: "onyx.Picker", 
											 name: "cboStreetUnit",
											 onActivate:"handleCboActivated",
											 classes : "fullWidth resetBottom resetTop roundedTop roundedBottom",
											 components: [
										 		
									 					{content: 'JALAN',active:true},
														{content: 'LORONG'},
														{content: 'CHANGKAT'},
														{content: 'PINGGIRAN'},
														{content: 'MEDAN'},
														{content: 'SOLOK'},
														{content: 'PERSIARAN'},
														{content: 'LEBOH'},
														{content: 'SIMPANGAN'},
														{content: 'SELEKOH'},
														{content: 'PINTASAN'},
														{content: 'PERSISIRAN'}, 
														{content: 'PERKARANGAN'},
														{content: 'PENGKALAN'},
														{content: 'LURAH'},
														{content: 'LINTANG'}, 
														{content: 'LINGKUNGAN'}, 
														{content: 'LINGKARAN'}, 
														{content: 'LENGKUNG'},
														{content: 'LENGKOK'},
														{content: 'LEBUHRAYA'},
														{content: 'LEBUH'},
														{content: 'LANGGAK'},
														{content: 'LAMAN'},
														{content: 'KAMPUNG'},
														{content: 'GERBANG'},
														{content: 'DATARAN'},
														{content: 'BULATAN'},
														{content: 'LALUAN'},
														{content: 'TINGKAT'},
														{content: 'OTHER'},
									 			
											],
										},
								]},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							id:"txtStreetName",
				 							name:"txtStreetName",
				 							classes:"inputFix",
											placeholder: "Street Name", 
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
									content:"State",
									classes:"orangeHeader",
								},
								{
									 kind: "onyx.PickerDecorator", 
									 classes:"selectDecorator resetBottom resetTop roundedTop roundedBottom icoArrow down inputFix",
									 onSelect: "pickerHandler",
									 components: [
										{
											content: "Pick One...",
											classes: "fullWidth resetBottom resetTop roundedTop roundedBottom",
											style:"background:none;color:#ffffff;font-weight:600;text-align:left;",
										},

										{
											 kind: "onyx.Picker", 
											 name: "cboState",
											 classes : "fullWidth resetBottom resetTop roundedTop roundedBottom",
											 components: [
													{content: 'WILAYAH PERSEKUTUAN', active:true},
													{content: 'W.P. PUTRAJAYA'},
													{content: 'SELANGOR'},
													{content: 'PULAU PINANG'},
													{content: 'PERLIS'},
													{content: 'PERAK'},
													{content: 'NEGERI SEMBILAN'},
													{content: 'MELAKA'},
													{content: 'KEDAH'},
													{content: 'JOHOR'},
											]
										},
								]},
								{
									tag:"h1",
									content:"Suburb",
									classes:"orangeHeader",
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop roundedTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							id:"txtSuburb",
				 							name:"txtSuburb",
				 							classes:"inputFix",
											placeholder: "Optional", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											 
				 						},
									]
								},
								{
									tag:"h1",
									content:"Complex",
									classes:"orangeHeader",
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom resetTop roundedTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							id:"txtComplex",
				 							name:"txtComplex",
				 							classes:"inputFix",
											placeholder: "Optional", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
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
 						onclick:"registerAddress",
 						content: "Confirm",
 					},
				]
		},
	],
	create: function(inSender, inEvent) {
		this.inherited(arguments);
		// From previous page.
		if ( localStorage.getObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE") != null ){
			//AppStorage Available.
			this.populateFields( localStorage.getObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE") );
		}
 	},
 	rendered: function(inSender,inEvent) {
 		this.inherited(arguments); 		 
 	},
 	populateFields : function( storageAddress ){
 		this.$.cboStreetUnit.setSelected(this.findMatchingItem( this.$.cboStreetUnit.controls, storageAddress.cboStreetUnit) );
		this.$.txtStreetName.setValue( storageAddress.txtStreetName );
 		this.$.txtSuburb.setValue( storageAddress.txtSuburb );
 		this.$.txtComplex.setValue( storageAddress.txtComplex );
 		this.$.cboState.setSelected( this.findMatchingItem( this.$.cboState.controls, storageAddress.cboState) );
   	},
   	findMatchingItem : function( controls, stringResults ){
   		var resultKey;
   		var len = controls.length;
   		for(var i = 1;i <= len;i++){
   			if (controls[i].content === stringResults) {
   				resultKey = controls[i];
   				break;
   			}
   		}
   		return resultKey;
   	},
 	zoomToInput : function (inSender, inEvent) {
 		// console.log(inSender);
 		switch(inSender.name) {
 			case "txtSuburb":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 				this.$.txtSuburb.focus();
 			break;
 			case "txtComplex":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 				this.$.txtComplex.focus();
 			break;
 		}
 	},
	pickerHandler : function (inSender, inEvent) {
		//inEvent.preventDefault();
	},
	handleCboActivated : function (inSender, inEvent) {

		console.log(inEvent.originator);
	},
 	resetZoomFromInput : function(inSender, inEvent) {
 		inEvent.preventDefault();
 		inSender.hasNode().blur();
 		this.$.createAccountScroll.setScrollTop(0);
 	},
 	registerAddress: function(inSender, inEvent) {
 		inEvent.preventDefault();
 		
 		var storageAddress = new Object();
 		storageAddress.cboStreetUnit = this.$.cboStreetUnit.selected.content;
 		storageAddress.txtStreetName = this.$.txtStreetName.getValue();
 		storageAddress.cboState  = this.$.cboState.selected.content;
 		storageAddress.txtSuburb = this.$.txtSuburb.getValue();
 		storageAddress.txtComplex = this.$.txtComplex.getValue();
 		localStorage.setObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE",storageAddress);
 		console.log("Stored : "+ JSON.stringify(localStorage.getObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE")) );
 		alert("Do Check Area of Service...");
 		this.$.cboStreetUnit.setSelected();
 		new register.account().renderInto( document.body );	
 	},
 	handleBtnBack : function(inSender, inEvent) {
 		inEvent.preventDefault();
 		localStorage.setObject("MOBILEPHDONLINE.APPDATA.TEMPSTORAGE",null);
 		new main.app().renderInto( document.body );
 	},
 	
});