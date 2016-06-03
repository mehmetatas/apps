app.directive("mmtEditor", function () {
    return {
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ngModel) {
            $(element).markdown({
                iconlibrary: "fa",
                savable: false,
                onChange: function (e) {
                    ngModel.$setViewValue(e.getContent());
                }
            });
        }
    }
});