enyo.kind({
	name: "mainmenu.panels",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
	components: [
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout",
			classes:"phdStd45px",			
				components: [
 					{
 						content: "Actual Header", 
 						fit:true, 
 						style:'text-align:center'
 					},
				]
		},
		{
			kind: "Scroller", 
			name: "tabScroller",
			classes:"onyx-toolbar phdStd40pxRedBar maximize", 
			touchOverscroll:false, 
			touch:false, 
			horizontal:"hidden",
			vertical:"hidden", 
			animate:false,
			thumb:false,
 				components: [
 					{
 						classes: "onyx-toolbar-inline maximize",
 						components: [
	 						{
		 						tag: "div",
	 	 						classes:"redBarGapper",
		 					},
		 					{
		 						tag: "div",
	 	 						style:"height:40px;margin:0px !important;",
		 						components:[
		 							{
				 						kind: "onyx.RadioGroup", 
				 						name: "tabMenu",
				 						onActivate:"handleRadioTabActivate",
				 						controlClasses: "onyx-tabbutton redBarTabButton", 
				 						components: [
											{
	 											content: "My Favourite",
												active: true,
												disabled: true,
											},
											{	
												content: "Combo Meal",
												disabled: true, 
											},
											{	
												content: "Ala Carte",
												disabled: true,
											},
											{	
												content: "Drinks",
												disabled: true,
											},
											{	
												content: "Pasta",
												disabled: true,
											},
										]
									},
		 						]
		 					},
		 					{
		 						tag: "div",
	 	 						classes:"redBarGapper",
		 					},
	 					]
	 				},
				]
		},
		{
			//Do the panel stuff here.
			kind: "Panels", 
			name:"AppPanels",
			onTransitionStart:"handlePanelChanged", 
			onTransitionEnd:"handleDestroyPrev",
			onflick:"handleFlick",
			arrangerKind: "CardArranger", 
			classes: "panels-wide",
			animate: true,
			draggable: false,
			fit:true,
			realtimeFit: false, 
			components: [
				{
					name:"favListPanel",
				},
				{
					name:"benchMarkListPanel",
				},
				{
					name:"heavyPanel",
				},
				{
					content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum dolor eu turpis aliquam vitae vestibulum mi luctus. Sed commodo arcu in libero placerat non fermentum orci porta. Duis commodo elementum tellus, nec egestas arcu sagittis ut. Aenean nulla urna, imperdiet quis venenatis at, pulvinar vitae libero. Maecenas congue libero a nulla commodo et volutpat magna ultrices. Aliquam tristique, eros gravida accumsan lacinia, purus nisl tristique odio, eget consequat diam dui in eros. Nulla sed nisl lorem. Aliquam sit amet vehicula nunc. Etiam eros ante, consequat sed rutrum ut, mollis in lacus. Nam malesuada lorem quis elit pharetra at ultrices justo euismod. Fusce at diam quis nulla tincidunt posuere. Mauris sit amet mauris odio. Mauris urna enim, aliquam et suscipit ac, ultrices vel nibh. Ut condimentum, ante ac feugiat facilisis, magna neque vehicula risus, ac fermentum nulla neque rhoncus mauris. Sed a lacus mi, nec accumsan est.", 
					style:"background:green;"
				},
				{
					content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum dolor eu turpis aliquam vitae vestibulum mi luctus. Sed commodo arcu in libero placerat non fermentum orci porta. Duis commodo elementum tellus, nec egestas arcu sagittis ut. Aenean nulla urna, imperdiet quis venenatis at, pulvinar vitae libero. Maecenas congue libero a nulla commodo et volutpat magna ultrices. Aliquam tristique, eros gravida accumsan lacinia, purus nisl tristique odio, eget consequat diam dui in eros. Nulla sed nisl lorem. Aliquam sit amet vehicula nunc. Etiam eros ante, consequat sed rutrum ut, mollis in lacus. Nam malesuada lorem quis elit pharetra at ultrices justo euismod. Fusce at diam quis nulla tincidunt posuere. Mauris sit amet mauris odio. Mauris urna enim, aliquam et suscipit ac, ultrices vel nibh. Ut condimentum, ante ac feugiat facilisis, magna neque vehicula risus, ac fermentum nulla neque rhoncus mauris. Sed a lacus mi, nec accumsan est.", 
					style:"background:blue;"
				},
			],

		},
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout", 
			classes:"phdStd45px",
			components: [ 
				{content:"Footer"},
			],
		}	
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns 
	// actual data.
	create: function() {
		//create, and rendered is one of the default events, we need to add inherited(arguments)
		//to work because, we are overriding the default functions.
		this.inherited(arguments);
		
		//To add external js files unit tested into some named div, just use addControl. 
		//Add controls and function into app's hash this.$, so that, you can control the function within.
		this.$.favList = new fav.selection(); 
		this.$.benchMarkList = new enyo.benchmark();
		this.$.heavyList = new enyo.heavy();

		this.$.favListPanel.addControl( this.$.favList );
		this.$.benchMarkListPanel.addControl( this.$.benchMarkList );
		this.$.heavyPanel.addControl( this.$.heavyList );
		this.$.AppPanels.refresh();
 	},
	updateTabMenu : function(index) {
		this.$.tabScroller.setScrollLeft(index * 200);
		this.$.tabMenu.setActive( this.$.tabMenu.children[index] );
		this.$.heavyList.refreshIt();
		this.$.favList.refreshIt();
		// reflowing panels recalculates and repaint the panel internally.
		this.$.favListPanel.reflow();
		this.$.benchMarkListPanel.reflow();
		this.$.heavyPanel.reflow();
	},
	handleFlick : function(inSender, inEvent ){
		// Temporary work around to handle Gesture on android 
		if (inEvent.xVelocity < -0.02){
			//Switching panels foward
			this.$.AppPanels.next();	
		} else if (inEvent.xVelocity > 0.025) {
			//Switching panels previous	
			this.$.AppPanels.previous();
		}
	},
	handleRadioTabActivate : function(inSender, inEvent ){
		//HandleRadioTab Do nothing.
	},
	
	handlePanelChanged : function(inSender, inEvent) {
		this.updateTabMenu( inEvent.toIndex );
		 
	},
	
});