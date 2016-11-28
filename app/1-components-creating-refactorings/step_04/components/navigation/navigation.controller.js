(function() {
    'use strict';

    angular.module("components")
        .controller("Navigation", Navigation);

    function Navigation() {
        let $navCtrl = this;

        $navCtrl.getText = getText;

        function getText() {
            return "Navigation Bar";
        }
    }

})();