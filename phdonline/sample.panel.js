enyo.kind({
	name: "enyo.sample.panel.app",
	kind: "FittableRows",
	classes: "onyx enyo-fit enyo-unselectable",
	components: [
		{kind: "onyx.Toolbar", components: [
			{content: "Realtime"},
			{kind: "onyx.Checkbox", onchange: "checkboxChange"}
		]},
		{kind: "Panels", fit: true, classes: "panels-sample-sliding-panels", arrangerKind: "CollapsingArranger", wrap: false, components: [
			{name: "left", components: [
				{kind: "List", classes: "enyo-fit", touch: true, count: 1000, onSetupItem: "setupItem", item: "item1", components: [
					{name: "item1", classes: "panels-sample-sliding-item"}
				]}
			]},
			{name: "middle", components: [
				{kind: "List", classes: "enyo-fit", touch: true, count: 1000, onSetupItem: "setupItem", item: "item2", components: [
					{name: "item2", classes: "panels-sample-sliding-item"}
				]}
			]},
			{name: "body", fit: true, components: [
				
			]}
		]}
	],
	create: function(inSender, inEvent) {
		this.inherited(arguments);
		//console.log( new enyo.simpleList.app() );
		 this.$.body.createComponent( new enyo.simpleList.app() );
	},	
	setupItem: function(inSender, inEvent) {
		this.$[inSender.item].setContent("This is row number: " + inEvent.index);
	},
	checkboxChange: function(inSender) {
		this.log();
		this.$.panels.realtimeFit = inSender.getValue();
	}
});