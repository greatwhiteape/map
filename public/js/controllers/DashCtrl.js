angular.module('DashCtrl', [])
.controller('DashboardController', ['$scope','$timeout',
	function($scope, $timeout) {

		$scope.tagline = 'Pretties!';

		/**
		* Initialize angular-gridster
		**/
		$scope.gridsterOptions = {
			columns: 4, // the width of the grid, in columns
			pushing: true, // whether to push other items out of the way on move or resize
			floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
			swapping: true, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
			width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
			colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
			rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
			margins: [30, 30], // the pixel distance between each widget
			outerMargin: true, // whether margins apply to outer edges of the grid
			isMobile: false, // stacks the grid items if true
			mobileBreakPoint: 800, // if the screen is not wider that this, remove the grid layout and stack the items
			mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
			minColumns: 1, // the minimum columns the grid must have
			minRows: 2, // the minimum height of the grid, in rows
			maxRows: 10,
			defaultSizeX: 1, // the default width of a gridster item, if not specifed
			defaultSizeY: 1, // the default height of a gridster item, if not specified
			minSizeX: 1, // minimum column width of an item
			maxSizeX: null, // maximum column width of an item
			minSizeY: 1, // minumum row height of an item
			maxSizeY: null, // maximum row height of an item
			resizable: {
				enabled: true,
				handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
				start: function(event, $element, widget) {}, // optional callback fired when resize is started,
				resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
				stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
			},
			draggable: {
				enabled: true, // whether dragging items is supported
				handle: 'h3', // optional selector for resize handle
				start: function(event, $element, widget) {}, // optional callback fired when drag is started,
				drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
				stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
			}	
		};
		
		$scope.dashboards = {
			'1': {
				id: '1',
				name: 'Home',
				widgets: [{
					col: 0,
					row: 0,
					sizeY: 2,
					sizeX: 2,
					name: "Widget 1",
					isChart: true
				}, {
					col: 2,
					row: 1,
					sizeY: 1,
					sizeX: 2,
					name: "Widget 2",
					isChart: false,
					template: "views/widget_template.html"
				}, {
					col: 2,
					row: 2,
					sizeY: 1,
					sizeX: 2,
					name: "Widget 3",
					isChart: false,
					template: "views/widget_template.html"
				}]
			},
			'2': {
				id: '2',
				name: 'Other',
				widgets: [{
					col: 1,
					row: 1,
					sizeY: 1,
					sizeX: 2,
					name: "Other Widget 1"
				}, {
					col: 1,
					row: 3,
					sizeY: 1,
					sizeX: 1,
					name: "Other Widget 2"
				}]
			}
		};

		$scope.clear = function() {
			$scope.dashboard.widgets = [];
		};

		$scope.addWidget = function() {
			$scope.dashboard.widgets.push({
				name: "New Widget",
				sizeX: 1,
				sizeY: 1
			});
		};

		$scope.$watch('selectedDashboardId', function(newVal, oldVal) {
			if (newVal !== oldVal) {
				$scope.dashboard = $scope.dashboards[newVal];
			} else {
				$scope.dashboard = $scope.dashboards[1];
			}
		});

		// init dashboard
		$scope.selectedDashboardId = '1';
	}
])

// helper code
.filter('object2Array', function() {
	return function(input) {
		var out = [];
		for (i in input) {
			out.push(input[i]);
		}
		return out;
	}
});