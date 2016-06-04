app.directive("mmtEditor", ["$compile", function ($compile) {
    return {
        scope: {
            save: "&editorSave",
            cancel: "&editorCancel"
        },
        restrict: "A",
        require: "ngModel",
        link: function (scope, element, attrs, ngModel) {
            var btnTemplate =
                '<div class="pull-right editor-buttons">' +
                    '<button class="btn btn-sm btn-default mr-xs" ng-click="cancel()"><i class="fa fa-remove"></i> Cancel</button>' +
                    '<button class="btn btn-sm btn-success" ng-click="save()"><i class="fa fa-save"></i> Save</button>' +
                    '<div class="clearfix"></div>' +
                '</div>';

            $(element).markdown({
                iconlibrary: "fa",
                savable: false,
                onChange: function (e) {
                    ngModel.$setViewValue(e.getContent());
                },
                onShow: function () {
                    var linkFn = $compile(btnTemplate);
                    var content = linkFn(scope);
                    $(content).appendTo($(".md-header"));
                }
            });
        }
    }
}]);