(function() {
	'use strict';

	angular.module("app")
		.controller("SummaryCtrl", SummaryCtrl);

	function SummaryCtrl($scope) {
		var ctrl = this;

		ctrl.getText = getText;
		ctrl.getTaskHeader = getTaskHeader; 

		ctrl.getTaskHeader();

		$scope.$watch("ctrl.visible", function(newVal) {
			ctrl.visible = newVal;
		});

		// mainCtrl property ($scope access)
		function getTaskHeader() {
			console.log($scope.mainCtrl.taskHeader);
			return $scope.mainCtrl.taskHeader
		}

		function getText(lang) {
			if (lang === "en") {
				return "English!";
			}
			else {
				return "Russian!";
			}
		}
	}

})();