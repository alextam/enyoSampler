enyo.kind({
	name: "main.app",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
 	components: [
 		{   	
			kind: "Scroller",
			name: "mainScroll",
			fit:true,
			touch:true, 
			thumb:false,
			ondrag:"resetZoomFromInput",
			components: [
			{
					classes:'inflatePadding',
					components: [
						{
				   			tag:"div",
				   			classes:"phdBigLogo",
				   			style:"height:45px;margin-top:5px;margin-bottom:5px;"
				   		},
				   		{
				   			kind:"ImageCarousel",
				   			name:"imgCarousel", 
				   			onload:"carouselLoad", 
				   			onZoom:"zoom", 
				   			onerror:"error", 
				   			onTransitionStart: "carouselTransitionStart", 
				   			onTransitionFinish: "carouselTransitionFinish",
				   			style:"height:186px"
		 		   		},
				   		
				   		{
				   			tag:"div",
				   			kind: "FittableColumns",
				   			classes: "carouselIndexDiv",
		 		   			components: [
								{
									tag:"div",
									name:"adSelector0",
									classes:"sliderBullet shadow"
									 
								},
								{
									tag:"div",
									name:"adSelector1",
									classes:"sliderBullet shadow"
								},
								{
									tag:"div",
									name:"adSelector2",
									classes:"sliderBullet shadow"
								}
							]
				   		},
				   		{
				   			tag:"div",
							name:"formLogin",
				   			kind: "FittableRows",
				   			components:[
					   			{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetBottom roundedTop",
						   			components: [
										{
											kind: "Input",
				 							id:"txtEmail",
				 							value:"your@email.com",
				 							classes:"inputFix",
											placeholder: "Email", 
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											attributes: {
												required: "email"	
											} 
				 						}
									]
								},
								{
						   			kind: "onyx.InputDecorator", 
						   			classes:"inputDecorator resetTop roundedBottom",
						   			components: [
										{
											kind: "Input",
				 							type:"password",
				 							value:"password",
											id:"txtPassword",
											classes:"inputFix",
											onfocus:"zoomToInput",
											onblur:"resetZoomFromInput",
											placeholder: "Password",
											attributes: {
												required: "password"	
											} 
											
				 						}
									]
								}
							]

				   		},
				   		
						{
				   			tag:"div",
				   			kind: "FittableColumns",
				   			style:"margin-top:15px",
		 		   			components: [
				   				{
									kind: "onyx.Button",
									classes:"orangeButton fullWidth phdButton",
									style:"width:48%",
									content: "Create Account",
									name:"btnCreateAccount",
									onclick: "createAccount"
								},
				   				{
									fit:true
								},
								{
									kind: "onyx.Button",
									classes:"greenButton fullWidth phdButton shadow",
									content: "Sign In",
									style:"width:48%",
									name:"btnSignin",
									onclick: "signIn"
								}
				   			]
				   		},
				   		{
				   			tag:"p",
				   			style:"height:30px;",
				   			onclick:"forgetPassword",
		 		   			allowHtml: true,
		 		   			content: "<a href='#' class='whitelink'>Forget Password ? &rarr;</a>"
				   		},
				   		{
				   			tag:"div",
				   			style:"height:100px;"
				   		}		   	
					]
				}
				]
		}
	],
	create: function() {
		this.inherited(arguments);
		// This is to override the onCreate Component.
		// To add stuff prior whole component renders.
		this.urls = [
			"img/adSample01.png",
			"img/adSample01.png",
			"img/adSample01.png"
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
 		inEvent.preventDefault();
 		alert('forgetPassword');
 	},
	carouselLoad: function(inSender, inEvent){
		//do Nothing
 	},
	carouselTransitionStart: function(inSender, inEvent) {
		this.updateAdSelector(inEvent.toIndex);
 	},
 	zoomToInput: function(inSender,inEvent){
 		inEvent.preventDefault();
 		inSender.focus();
 		this.$.imgCarousel.hide();
 		this.$.mainScroll.setScrollTop(0);
 	},
 	resetZoomFromInput: function(inSender,inEvent){
 		//inEvent.preventDefault();
 		inSender.hasNode().blur();
 		this.$.imgCarousel.show();
 		this.$.mainScroll.setScrollTop(0);
 	},
	signIn : function(inSender,inEvent){
		inEvent.preventDefault();
		this.validateUtil = new enyo.validator(); 
 		var allValidComponents = this.validateUtil.validate(this.$.formLogin,onSuccessValidate,onErrorValidate);
		function onSuccessValidate(results){
			//console.log(results);
			new mainmenu.panels().renderInto(document.body);
			console.log('Do actual login and retrieve user id');
		}
		function onErrorValidate(results){
			alert("Please fill up the fields with valid input to proceed");
			for (var i = 0; i < results.errors.length; i++) {
				results.errors[i].controller.setValue("");
				results.errors[i].controller.setAttribute("placeholder", "");
				results.errors[i].controller.setAttribute("placeholder", results.errors[i].message);		
			};		
		}
	},
	createAccount : function(inSender, inEvent) {
		inEvent.preventDefault();
		new register.address().renderInto( document.body );
	}
});