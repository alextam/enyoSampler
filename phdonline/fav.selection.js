enyo.kind({
	name: "fav.selection",
	kind: "FittableRows",
	classes: "enyo-fit enyo-unselectable",
	components: [
		{
			tag:"div",
			style:"text-align:center !important;",
			classes:"enyo-fit",
			components : [
				{
					kind: "onyx.Spinner",
					name:"loadingDiv",
					style:"margin-top:45%;height:65px;color:#ffffff"
				}
			]
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
										name:"title"
									},
									{
										tag:"p",
										style:"font-size:0.8em;margin:2px !important;color:#666666",
										allowHtml:true,
										name:"description"
									}
								] 
							} 
						]
					}
				]
		}
	],
	db: [
		{"title":"My Favourite #1","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #2","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #3","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #4","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My Favourite #5","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #1","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #2","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #3","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #4","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"},
		{"title":"My History #5","description":"Special Meal 3 - 9&Prime; Thin Crust Classic Chicken, 9&Prime; Chicken Hawa"}
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns actual data
	create: function() {
		this.inherited(arguments);
		this.$.loadingDiv.show();
		this.populateList();
	},
	refreshIt : function(){
		console.log('doing refresh');
		this.$.favList.setScrollTop(0);
		document.body.scrollTop = 1;
		document.body.scrollTop = 0;
		this.populateList();
	},
	populateList : function(inSender, inEvent) {
		this.$.favList.setCount(this.db.length);
 		this.$.favList.reset();
	},
	listItemTapped: function(inSender, inEvent) {
		//Do Nothing yet
 	},
	setupItem : function(inSender, inEvent) {
		var i = inEvent.index;
		var dataTitle = this.db[i].title;
		var dataDescription = this.db[i].description;
		
		this.$.title.setContent(dataTitle);
		this.$.description.setContent(dataDescription);
		this.$.loadingDiv.hide();		 
	}
});