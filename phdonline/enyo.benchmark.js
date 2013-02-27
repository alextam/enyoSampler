enyo.kind({
	name: "enyo.benchmark",
	kind: "FittableRows", 
	classes: "enyo-fit enyo-unselectable",
	components: [
		{
			kind: "FittableColumns", 
			style:'margin:10px;height:48px;',
				components: [
					{
						name:'searchInput', 
						kind: "Input", 
						classes:"inputFix",
						layoutKind: "FittableColumnsLayout", 
						placeholder: "Search text here...", 
						fit:true, 
						style:'padding:10px;font-size:1.1em;', 
						onchange: "search",
					}
				]
		},
		{   
			name: "benchMarkList", kind: "List", multiSelect: false, fit:true, count:0, touch:true, onSetupItem: "setupItem", 
				components: [
					{name: "item", style:'height:50px;padding:15px;border:1px solid #f3f3f3;background:#ccc;', ontap:'listItemTapped', layoutKind: "FittableColumnsLayout", 
							components: [
								{name: "age", style:'font-size:1em;float:left;padding:5px;', fit:true},
								{name: "name", style:'font-size:1em;float:left;padding:5px;', fit:true },
								{kind: "onyx.Button", content: "X", style:'text-align:center;height:30px;float:right;', name:'btnDelete', ontap:'btnDeleteTapped', fit:true}
							]
					}
				]
		},
	],
	// Sample Data in form of Array; the real thing will have some callback/ajax that returns actual data
	db: [
		{"name":"alex","age":13},
		{"name":"amy","age":12},
		{"name":"azrul","age":12},
		{"name":"ben","age":12},
		{"name":"beniotz","age":11},
		{"name":"chasse","age":13},
		{"name":"charlie","age":13},
		{"name":"donny","age":11},
		{"name":"donavon","age":12},
		{"name":"eddie","age":13},
		{"name":"edison","age":13},
		{"name":"eddy","age":11},
		{"name":"eliza","age":12},
		{"name":"fanny","age":13},
		{"name":"feng li","age":13},
		{"name":"guinevere","age":16},
		{"name":"henry","age":12},
		{"name":"henrik","age":13},
		{"name":"isaac","age":11},
		{"name":"john","age":11},
		{"name":"jessie","age":12},
		{"name":"fanny chow","age":16},
		{"name":"feng chao","age":13},
		{"name":"guiness","age":16},
		{"name":"menigi","age":12},
		{"name":"enrique","age":13},
		{"name":"ismail","age":11},
		{"name":"dread","age":11},
		{"name":"jessie02","age":12}
	],
	create: function() {
		this.inherited(arguments);
		this.populateList();
	},
	btnPrevTapped: function(inSender, inEvent) {
		new enyo.tutorial.app().renderInto(document.body);
	},
	populateList : function(inSender, inEvent) {
		this.$.benchMarkList.setCount(this.db.length);
		this.$.benchMarkList.reset();
	},
	setupItem : function(inSender, inEvent) {
		var i = inEvent.index;
		var data = this.filter ? this.filtered : this.db;
		var names = data[i].name;
		var ages = data[i].age;
		
		this.$.name.setContent(names);
		this.$.age.setContent(ages);
	}, 
	refreshIt : function(){
		console.log('doing refresh');
		this.$.benchMarkList.setScrollTop(0);
		document.body.scrollTop = 2;
		document.body.scrollTop = 0;
	},
	search: function(inSender, inEvent) {
		this.searchText = this.$.searchInput.getValue();
		enyo.job(this.id + ":search", enyo.bind(this, "filterList", this.searchText), 200);

	},
	filterList : function(inFilter) {
		if (inFilter != this.filter) {
			this.filter = inFilter;
			this.filtered = this.generateFilteredData(inFilter);
			this.$.benchMarkList.setCount(this.filtered.length);
			this.$.benchMarkList.reset();
		}
		console.log(this.filtered);
	},
	refreshList: function() {
		if (this.filter) {
			this.filtered = this.generateFilteredData(this.filter);
			this.$.benchMarkList.setCount(this.filtered.length);
		} else {
			this.$.benchMarkList.setCount(this.db.length);
		}
		this.$.benchMarkList.refresh();
	},
	removeItem: function(inIndex) {
		this._removeDbItem(inIndex);
		//Single item deleted from listView but must delete DB reference too.
		this.$.benchMarkList.getSelection().remove(inIndex);
		this.refreshList();
	},
	_removeDbItem: function(inIndex) {
		var i = this.filter ? this.filtered[inIndex].dbIndex : inIndex;
		this.db.splice(i, 1);
	},
	btnDeleteTapped : function(inSender, inEvent) {
		//Single item deleted
		console.log(inEvent.index + ' deleted');	
		this.removeItem(inEvent.index);
		return true;
	},
	generateFilteredData : function(inFilter){
		var re = new RegExp("^" + inFilter, "i");
		var r = [];
		for (var i=0, d; (d=this.db[i]); i++) {
			if (d.name.match(re)) {
				d.dbIndex = i;
				r.push(d);
			}
		}
		return r;
	}
});