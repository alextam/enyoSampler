enyo.kind({
	name: "enyo.heavy",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	// In Enyo Almost anything MUST PROVIDE exact height to compute accurate listview and footer.
	components: [
		{   name: "heavyList", kind: "List", count: 500, multiSelect: false, fit:true, onSetupItem: "setupItem", touch:true,
				components: [
					{name: "item", style:'height:50px;padding:15px;border:1px solid #f3f3f3;background-color:#555;', ontap:'listItemTapped', components: [
						{kind:"Image", scale:'auto', src:'icon.png', style:'width:50px;float:left;', fit:true, touch:false},
						{name: "index", style:'float:left; font-size:1em;padding:10px',  fit:true, touch:false},
						{name: "name", style:'float:left; font-size:1em;padding:10px',  fit:true, touch:false},
						{kind: "onyx.Button", content: "X", name:"X", ontap:'btnRowTapped', style:'float:right',fit:true},
					]}
				]
		},		
	],
	names:[],
	setupItem: function(inSender, inEvent) {
			// this is the row we're setting up
			var i = inEvent.index;
			// make some mock data if we have none for this row
			if (!this.names[i]) {
				this.names[i] = Math.random(999).toFixed(5);
			}
			var n = this.names[i];
			var ni = ("00000" + i).slice(-7);
			// apply selection style if inSender (the list) indicates that this row is selected.
			this.$.item.addRemoveClass("list-sample-selected", inSender.isSelected(i));
			this.$.name.setContent(n);
			this.$.index.setContent(ni);
	},
	refreshIt : function(){
		console.log('doing refresh');
		this.$.heavyList.setScrollTop(0);
		document.body.scrollTop = 2;
		document.body.scrollTop = 0;
	},
	rendered : function(inSender,inEvent){
		this.inherited(arguments);
	},
	btnRowTapped : function(inSender,inEvent){
		console.log(inSender.name + " is tapped");
	},
	listItemTapped : function(inSender, inEvent) {
		console.log(inEvent.index + ' tapped');
		// Correspond list with array "names" inside enyo;
		console.log(this.names[inEvent.index]);
	},
	

});