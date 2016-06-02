app.directive("mmtEditor", function() {
    return {
        scope: {
            content: "="
        },
        replace: true,
        transclude: true,
        restrict: "E",
        template: '<textarea style="height: calc(100vh - 200px)" ng-model="content"></textarea>',
        link: function (scope, el, attrs) {
            var $el = $(el);

            $el.val(scope.content);

            $el.markdown({
                iconlibrary: "fa"
            });
        }
    };
});
