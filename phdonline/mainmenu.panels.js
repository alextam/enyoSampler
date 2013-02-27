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
					content:3, 
					style:"background:green;"
				},
				{
					content:4, 
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
		//create, rendered is one of the default events, we need to add inherited(arguments)
		//to work because, we are overriding the default functions.
		this.inherited(arguments);
		
		//To add external js files unit tested into some named div, just use addControl. 
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
		this.$.favListPanel.reflow();
		this.$.benchMarkListPanel.reflow();
		this.$.heavyPanel.reflow();
		this.$.heavyList.refreshIt();
	},
	handleFlick : function(inSender, inEvent ){
		if (inEvent.xVelocity < 0){
			this.$.AppPanels.next();	
		} else {
			this.$.AppPanels.previous();
		}
	},
	handleRadioTabActivate : function(inSender, inEvent ){
		//HandleRadioTab
	},
	
	handlePanelChanged : function(inSender, inEvent) {
		this.updateTabMenu( inEvent.toIndex );
		 
	},
	
});