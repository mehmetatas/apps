app.directive("mmtContextmenu", function () {
    return {
        scope: {
            menuSelected: "&",
            menuKey: "="
        },
        restrict: "A",
        link: function (scope, element, attrs, ngModel) {
            $(element).contextMenu({
                menuSelector: attrs.menuSelector,
                menuSelected: function(invokedOn, selectedMenu) {
                    scope.menuSelected({
                        key: scope.menuKey,
                        action: selectedMenu.attr("menu-action")
                    });
                }
            });
        }
    }
});