(function() {
	var app = angular.module('calcApp', []);
	app.controller('CalculatorController', ['$scope', 
		function($scope) {
			$scope.lumen_options = [375, 600, 900, 1125, 1600];
			$scope.current_lumens = 600;
			$scope.current_cost = 12;
			$scope.current_hours = 4;
			$scope.total_days = 365;

			$scope.inc_conversion = 0.0265;
			$scope.hal_conversion = 0.450;
			$scope.cfl_conversion = 0.01460;
			$scope.led_conversion = 0.125;

			$scope.calculate = function(){

				$scope.inc_wattage = 
					($scope.inc_conversion * $scope.current_lumens).toFixed(1);
				$scope.hal_wattage = 
					($scope.hal_conversion * $scope.current_lumens).toFixed(1);
				$scope.cfl_wattage = 
					($scope.cfl_conversion * $scope.current_lumens).toFixed(1);
				$scope.led_wattage = 
					($scope.led_conversion * $scope.current_lumens).toFixed(1);
				
				if($scope.current_hours > 24) { $scope.current_hours = 24;}
				
				var total_hours = $scope.total_days * $scope.current_hours;
				var cost = ($scope.current_cost / 100);

				$scope.inc_cost = ((($scope.inc_wattage * total_hours) / 1000) * cost).toFixed(2);
				$scope.hal_cost = ((($scope.hal_wattage * total_hours) / 1000) * cost).toFixed(2);
				$scope.cfl_cost = ((($scope.cfl_wattage * total_hours) / 1000) * cost).toFixed(2);
				$scope.led_cost = ((($scope.led_wattage * total_hours) / 1000) * cost).toFixed(2);

			};

			$scope.calculate();
		}
	]);
})();