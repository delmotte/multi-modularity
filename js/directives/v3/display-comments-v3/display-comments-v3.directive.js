(function () {
    'use strict';

    angular.module('comments').directive('displayCommentsV3', displayComments);

    displayComments.$inject = ['RecursionHelper'];

    function displayComments(RecursionHelper) {
        var directive = {
            link: link,
            templateUrl: 'js/directives/v3/display-comments-v3/display-comments-v3.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                comments: '='
            },
            compile: compile
        };
        return directive;

        function link(scope, element, attrs) {
            scope.show = false;
            scope.toggle = function () {
                scope.show = !scope.show;
            };
            scope.showHide = function (event) {
                if (event.which == 39) scope.show = true; // à droite
                else if (event.which == 37) scope.show = false; // à gauche
            };
        }

        function compile (element) {
            // Use the compile function from the RecursionHelper,
            // And return the linking function(s) which it returns
            return RecursionHelper.compile(element, link);
        }

    }

})();