(function () {
    'use strict';

    angular.module('comments').directive('postV1', postDirective);

    postDirective.$inject = [];

    function postDirective() {
        var directive = {
            link: link,
            templateUrl: 'js/directives/v1/post-v1/post-v1.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                data: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            console.log(scope.data);

        }

    }

})();