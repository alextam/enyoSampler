enyo.kind({
	name: "meal.lister",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
 	components: [
		{   
			name: "mealList", 
			kind: "List", 
			count: 10, 
			multiSelect: false, 
			fit:true, 
			onSetupItem: "setupItem", 
			touch:true,
				components: [
					{
						name: "mealListItem", 
						style:'height:50px;padding:15px;border:1px solid #f3f3f3;background-color:#555;', 
						ontap:'listItemTapped', 
						components: [
							{
								name: "mealListItemContent", 
								content:"Meal Yum Yum", 
								fit:true, 
								touch:false
							}
						]
					}
				]
		}		
	],
	create: function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff onCreate
	},
	refreshIt : function(){
		console.log('doing refresh');
		this.$.mealList.setScrollTop(1);
		this.$.mealList.setScrollTop(0);
		document.body.scrollTop = 1;
		document.body.scrollTop = 0;
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
		//Do stuff afterRendered
	},
	setupItem : function(inSender,inEvent){
		//Will Fire when setCount or a number is assigned to count. See line 9.
	}
});