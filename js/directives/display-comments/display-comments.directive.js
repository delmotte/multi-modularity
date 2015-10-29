(function () {
    'use strict';

    angular.module('comments').directive('displayComments', displayComments);

    displayComments.$inject = ['RecursionHelper'];

    function displayComments(RecursionHelper) {
        var directive = {
            link: link,
            templateUrl: 'js/directives/display-comments/display-comments.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                comments: '='
            },
            compile: compile
        };
        return directive;

        function link(scope, element, attrs) {}

        function compile (element) {
            // Use the compile function from the RecursionHelper,
            // And return the linking function(s) which it returns
            return RecursionHelper.compile(element);
        }

    }

})();