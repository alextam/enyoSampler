enyo.kind({
	name: "main.app",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
 	components: [
		{   	
			kind: "FittableRows",
			fit:true,
			id:"formLogin",
			classes:'inflatePadding',
			components: [
				 
		   		{
		   			tag:"div",
		   			classes:"phdBigLogo",
		   			style:"height:70px;",
		   		},
		   		{
		   			kind:"ImageCarousel",
		   			name:"imgCarousel", 
		   			onload:"carouselLoad", 
		   			onZoom:"zoom", 
		   			onerror:"error", 
		   			onTransitionStart: "carouselTransitionStart", 
		   			onTransitionFinish: "carouselTransitionFinish",
		   			style:"height:186px",
 		   		},
		   		
		   		{
		   			tag:"div",
		   			kind: "FittableColumns",
		   			classes: "carouselIndexDiv",
 		   			components: [
						{
							tag:"div",
							name:"adSelector0",
							classes:"sliderBullet shadow",
							 
						},
						{
							tag:"div",
							name:"adSelector1",
							classes:"sliderBullet shadow",
						},
						{
							tag:"div",
							name:"adSelector2",
							classes:"sliderBullet shadow",
						},
					],
		   		},
		   		{
		   			kind: "onyx.InputDecorator", 
		   			classes:"inputDecorator resetBottom roundedTop shadow",
		   			components: [
						{
							kind: "Input",
 							id:"txtInput",
 							value:"your@email.com",
							placeholder: "Email", 
							attributes: {
								required: "email"	
							} 
 						},
					]
				},
				{
		   			kind: "onyx.InputDecorator", 
		   			classes:"inputDecorator resetTop roundedBottom shadow",
		   			components: [
						{
							kind: "Input",
 							type:"password",
 							value:"password",
							id:"txtPassword",
							placeholder: "Password",
							attributes: {
								required: "password"	
							} 
							
 						},
					]
				},
				{
		   			tag:"div",
		   			kind: "FittableColumns",
		   			style:"margin-top:15px",
 		   			components: [
		   				{
							kind: "onyx.Button",
							classes:"orangeButton fullWidth phdButton shadow",
							style:"width:48%",
							content: "Create Account",
							name:"btnCreateAccount",
							ontap: "createAccount"
						},
		   				{
							fit:true,
						},
						{
							kind: "onyx.Button",
							classes:"greenButton fullWidth phdButton shadow",
							content: "Sign In",
							style:"width:48%",
							name:"btnSignin",
							ontap: "signIn"
						},
		   			]
		   		},
		   		{
		   			tag:"p",
		   			style:"height:30px;",
		   			ontap:"forgetPassword",
 		   			allowHtml: true,
 		   			content: "<a href='#' class='whitelink'>Forget Password ? &rarr;</a>",
		   		},	   	
			]
		},
	],
	create: function() {
		this.inherited(arguments);
		// This is to override the onCreate Component.
		// To add stuff prior whole component renders.
		this.urls = [
			"img/ad1.png",
			"img/ad2.png",
			"img/ad3.png"
		];
		this.$.imgCarousel.setImages(this.urls);
		//Starts at 2nd Pic which is the center
		this.$.imgCarousel.next();
		this.updateAdSelector(this.$.imgCarousel.index);
 	},
	updateAdSelector : function(index) {
		this.$.adSelector0.removeClass('bulletSelected');
		this.$.adSelector1.removeClass('bulletSelected');
		this.$.adSelector2.removeClass('bulletSelected');
		switch(index){
			case 0:
				this.$.adSelector0.addClass('bulletSelected');
			break;

			case 1:
				this.$.adSelector1.addClass('bulletSelected');
			break;

			case 2:
				this.$.adSelector2.addClass('bulletSelected');
			break;
		}
 	},
 	forgetPassword : function(inSender,inEvent){
 		alert('forgetPassword');
 	},
	carouselLoad: function(inSender, inEvent){
		//do Nothing
 	},
	carouselTransitionStart: function(inSender, inEvent) {
		this.updateAdSelector(inEvent.toIndex);
 	},
	signIn : function(inSender,inEvent){
  		SimpleValidator.validateForm($('#formLogin'), true, onSuccessValidate, onErrorValidate );
		function onSuccessValidate(successFieldsID){
			new mainmenu.panels().renderInto(document.body);
		}
		function onErrorValidate(correctFieldsID, errorFieldsID){
			$.each(errorFieldsID, function(index, fields) {
				// $(eval(fields)).addClass('errorInput');
			});
			alert("Please fill up the fields with valid input to proceed");	
		}
	},
	createAccount : function(inSender, inEvent) {
		console.log(inSender.name + ' tapped');
	}
});