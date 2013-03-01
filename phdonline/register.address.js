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
									 name: "cboStreetPrefix",
									 classes:"selectDecorator resetBottom roundedTop iconArrow inputFix",
									 onSelect: "pickerHandler",
									 components: [
										{
											content: "Pick One...",
											classes: "fullWidth resetBottom roundedTop",
											style:"background:none;color:#ffffff;font-weight:600;text-align:left;",
										},
										{
											 kind: "onyx.Picker", 
											 classes : "fullWidth resetBottom resetTop roundedTop roundedBottom",
											 components: [
													{content: 'JALAN', active:true},
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
											]
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
									 name: "cboState",
									 classes:"selectDecorator resetBottom resetTop roundedTop roundedBottom iconArrow inputFix",
									 onSelect: "pickerHandler",
									 components: [
										{
											content: "Pick One...",
											classes: "fullWidth resetBottom resetTop roundedTop roundedBottom",
											style:"background:none;color:#ffffff;font-weight:600;text-align:left;",
										},

										{
											 kind: "onyx.Picker", 
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
		
 	},
 	zoomToInput : function (inSender, inEvent) {
 		//
 		// console.log(inSender);
 		switch(inSender.name) {
 			case "txtSuburb":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 			break;
 			case "txtComplex":
 				this.$.createAccountScroll.setScrollTop(0);
 				this.$.createAccountScroll.setScrollTop(180);
 			break;
 			//inSender.focus();
 		}
 	},
 	resetZoomFromInput : function(inSender, inEvent) {
 		//this.$.createAccountScroll.setScrollTopY(0);
 		inEvent.preventDefault();
 		inSender.hasNode().blur();
 		this.$.createAccountScroll.setScrollTop(0);
 	},
 	registerAddress: function(inSender, inEvent) {
		alert('registerAddress');	
 	},
 	handleBtnBack : function(inSender, inEvent) {
 		new main.app().renderInto( document.body );
 	},
 	
});