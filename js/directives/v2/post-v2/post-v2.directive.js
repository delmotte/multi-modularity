(function () {
    'use strict';

    angular.module('comments').directive('postV2', postDirective);

    postDirective.$inject = [];

    function postDirective() {
        var directive = {
            link: link,
            templateUrl: 'js/directives/v2/post-v2/post-v2.directive.html',
            restrict: 'E',
            replace: true,
            scope: {
                data: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

            document.addEventListener('keyup', function (event) {
                event.preventDefault();
                if (event.which == 40) $.tabNext();//en bas
                else if (event.which == 38) $.tabPrev();//en haut
            }, false);

        }

    }

})();