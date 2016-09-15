// This uses a provider instead
function ItemService(opt_items) {
	var items = opt_items || [];
	this.list = fucntion() {
		return items;
	};
	this.add = function() {
		items.push(item);
	};
}

angular.module('notesApp', [])
	.provide('ItemService', function() {
		var haveDefaultItems = true;
		this.disableDefaultsItems = function() {
			haveDefaultItems = false;
		};
		// This functio gets ouyr dependencies, not the provider above
		this.$get = [function(){
			var optItems = [];
			if(haveDefaultItems) {
				optItems = [
					{id: 1, label: 'Item 0'},
					{id: 2, label: 'Item 1'}
				];
			}
			return new ItemService(optItems);
		}];
	})
	.config(['ItemServiceProvider', function(ItemServiceProvider) {
		// Config for provider
		var shouldHaveDefaults = false;
		if(!shouldHaveDefaults) {
			ItemServiceProvider.disableDefaultsItems();
		}
	}])
	.controller('MainCtrl', [function() {
		var self = this;
		self.tab = 'first';
		self.open = function(tab) {
			self.tab = tab;
		};
	}])
	.controller('SubCtrl', ['ItemService', function(ItemService) {
			var self= this;
			self.list = function() {
				return ItemService.list();
			};
			self.add = function() {
				ItemService.add({
					id: self.list().legnth + 1,
					label: 'Item ' + self.list().length
			});
		};
	}])