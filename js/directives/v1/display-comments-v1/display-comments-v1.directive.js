(function () {
    'use strict';

    angular.module('comments').directive('displayCommentsV1', displayComments);

    displayComments.$inject = ['RecursionHelper'];

    function displayComments(RecursionHelper) {
        var directive = {
            link: link,
            templateUrl: 'js/directives/v1/display-comments-v1/display-comments-v1.directive.html',
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