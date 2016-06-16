(function () {
    "use strict";

    angular
        .module("app")
		.directive("mmtContextmenu", mmtContextmenu);

    /* @ngInject */
    function mmtContextmenu() {
        return {
            restrict: "A",
            scope: {
                menuSelected: "&",
                menuKey: "="
            },
            link: linkFunc
        };

        function linkFunc(scope, el, attr) {
            $(el).contextMenu({
                menuSelector: attr.menuSelector,
                menuSelected: function (invokedOn, selectedMenu) {
                    scope.menuSelected({
                        key: scope.menuKey,
                        action: selectedMenu.attr("menu-action")
                    });
                }
            });
        }
    }
})();