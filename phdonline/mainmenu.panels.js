enyo.kind({
	name: "mainmenu.panels",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable phdBg",
	components: [
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout",
			classes:"phdStd45px",
			style:"padding:0px !important",			
			components: [
					{
						tag:"h1",
						classes:"toolBarHeader",
						content: "Header", 
						fit:true, 
					},
					{
						kind: "onyx.MenuDecorator", 
						ontap:"handleMenuPop",
						onSelect: "itemSelected", 
						style:"margin-top:5px !important",
						components: [
							{content: "menu"},
							{
								kind: "onyx.Menu",
								floating: true,
								name:"pullDownMenu",
 								components: [
									{content: "Favorites"},
									{classes: "onyx-menu-divider"},
									{content: "Recents"},
									{classes: "onyx-menu-divider"},
									{content: "Exit App"}
								]}
						]
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
					name:"specialOrderPanel",
				},
				{
					name:"textAreaPanel",
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
		this.$.specialOrder = new special.order();
		this.$.textArea = new enyo.textarea();
		
		this.$.favListPanel.addControl( this.$.favList );
		this.$.benchMarkListPanel.addControl( this.$.benchMarkList );
		this.$.heavyPanel.addControl( this.$.heavyList );
		this.$.specialOrderPanel.addControl( this.$.specialOrder );
		this.$.textAreaPanel.addControl( this.$.textArea );
		this.$.AppPanels.refresh();
		
 	},
	updateTabMenu : function(index) {
		this.$.tabScroller.setScrollLeft(index * 200);
		this.$.tabMenu.setActive( this.$.tabMenu.children[index] );
		this.$.benchMarkList.refreshIt();
		this.$.heavyList.refreshIt();
		this.$.favList.refreshIt();

		// reflowing panels recalculates and repaint the panel internally.
		// this.$.AppPanels.reflow(); <-- cant use this twice.
		this.$.favListPanel.reflow();
		this.$.benchMarkListPanel.reflow();
		this.$.heavyPanel.reflow();
		this.$.textAreaPanel.reflow();
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
	handleMenuPop : function(inSender, inEvent ){
		inEvent.preventDefault();
		// Always force floating mode for popupmenu as it will repaint.
		this.$.pullDownMenu.show();
	},
	itemSelected : function(inSender, inEvent ){
		alert(inEvent.originator.content);
	},
	handlePanelChanged : function(inSender, inEvent) {
		this.updateTabMenu( inEvent.toIndex );
	},
	
});