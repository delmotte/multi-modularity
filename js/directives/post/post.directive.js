(function () {
    'use strict';

    angular.module('comments').directive('post', postDirective);

    postDirective.$inject = [];

    function postDirective() {
        var directive = {
            link: link,
            templateUrl: 'js/directives/post/post.directive.html',
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