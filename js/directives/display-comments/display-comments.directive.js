(function () {
    'use strict';

    angular.module('comments').directive('displayComments', displayComments);

    displayComments.$inject = [];

    function displayComments() {
        var directive = {
            link: link,
            templateUrl: 'js/directives/display-comments/display-comments.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                selected: '=category'
            }
        };
        return directive;

        function link(scope, element, attrs) {


        }

    }

})();