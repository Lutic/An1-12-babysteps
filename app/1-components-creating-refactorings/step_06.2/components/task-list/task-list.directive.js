(function() {
    'use strict';

    angular
        .module("components")
        .directive("taskList", taskList);

    function taskList() {
        return {
            scope: true,
            controller: "TaskList",
            controllerAs: "$ctrl",
            transclude: true,
            templateUrl: "components/task-list/task-list.html"
        };
    }

})();