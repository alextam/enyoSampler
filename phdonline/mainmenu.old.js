enyo.kind({
	name: "enyo.mainmenu",
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
				 						onActivate:"tabActivated",
				 						controlClasses: "onyx-tabbutton redBarTabButton", 
				 						components: [
											{
	 											content: "My Favourite",
												active: true,
											},
											{	
												content: "Combo Meal", 
											},
											{	
												content: "Coming Soon",
											},
											{	
												content: "Coming Soon",
											},
											{	
												content: "Coming Soon",
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

			tag:"div",
			style:"height:5px;"
		},
		{   
			kind: "List",
			name: "favList", 
			multiSelect: false, 
			fit:true, 
			touch:true, 				
			onSetupItem: "setupItem", 
				components: [
					{
						name: "item", 
						classes:"favListItems",
 						ontap:'listItemTapped',
  						components: [
							{ 
								tag:"div",
								classes:"favListSubItems roundedCorner",
								components: [
									{
										tag:"h1",
										style:"font-size:1em;margin:2px !important",
										name:"title",
									},
									{
										tag:"p",
										style:"font-size:0.8em;margin:2px !important;color:#666666",
										allowHtml:true,
										name:"description",
									},
								], 
							} 
						]
					}
				]
		},
		{ 
			tag:"div",
			style:"height:5px;"
		},
		{
			kind: "onyx.Toolbar",
			layoutKind: "FittableColumnsLayout", 
			classes:"phdStd45px",		
			components: [
				{content: "Footer", fit:true, style:'text-align:center;' },
			]
		}	
	],
	db: [
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns actual data
	rendered: function() {
		this.inherited(arguments);
		this.populateList();
	},
	populateList : function(inSender, inEvent) {
		this.$.favList.setCount(this.db.length);
 		this.$.favList.reset();
	},
	setupItem : function(inSender, inEvent) {
		var i = inEvent.index;
		var dataTitle = this.db[i].title;
		var dataDescription = this.db[i].description;
		
		this.$.title.setContent(dataTitle);
		this.$.description.setContent(dataDescription);		 
	}, 

	
});