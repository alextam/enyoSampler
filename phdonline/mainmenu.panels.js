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
			arrangerKind: "CarouselArranger", 
			classes: "panels-wide",
			fit:true,
			realtimeFit: true, 
			components: [
				{
					name:"favListPanel",
				},
				{
					content:1, 
					style:"background:orange;"
				},
				{
					content:2, 
					style:"background:yellow;"
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
			components: [ {content:"Footer"},
 			]
		}	
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns actual data
	create: function() {
		//create, rendered is one of the default events, we need to add inherited(arguments)
		//to work because, we are overriding the default functions.
		this.inherited(arguments);
		//To add external js files unit tested into some named div, just use addControl. 
		this.$.favListPanel.addControl(new fav.selection());
 	},
	updateTabMenu : function(index) {
		this.$.tabScroller.scrollTo(index*200, 0);
		this.$.tabMenu.setActive( this.$.tabMenu.children[index] );

	},
	handleRadioTabActivate : function(inSender, inEvent ){

	},
	handlePanelChanged : function(inSender, inEvent) {
		this.updateTabMenu( inEvent.toIndex );
	},
	
});