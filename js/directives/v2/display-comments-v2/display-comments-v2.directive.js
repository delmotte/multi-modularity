(function () {
    'use strict';

    angular.module('comments').directive('displayCommentsV2', displayComments);

    displayComments.$inject = ['RecursionHelper'];

    function displayComments(RecursionHelper) {
        var directive = {
            link: link,
            templateUrl: 'js/directives/v2/display-comments-v2/display-comments-v2.directive.html',
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