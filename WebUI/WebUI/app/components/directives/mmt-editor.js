(function () {
    "use strict";

    angular
        .module("app")
		.directive("mmtEditor", mmtEditor);

    mmtEditor.$inject = ["$compile"];

    function mmtEditor($compile) {
        return {
            restrict: "A",
            require: "ngModel",
            scope: {
                save: "&editorSave",
                cancel: "&editorCancel"
            },
            link: linkFunc
        };

        function linkFunc(scope, el, attr, ngModel) {
            /* jshint -W108 */
            var btnTemplate =
                '<div class="pull-right editor-buttons">' +
                    '<button class="btn btn-sm btn-default mr-xs" ng-click="cancel()"><i class="fa fa-remove"></i> Cancel</button>' +
                    '<button class="btn btn-sm btn-success" ng-click="save()"><i class="fa fa-save"></i> Save</button>' +
                    '<div class="clearfix"></div>' +
                '</div>';

            $(el).markdown({
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
})();