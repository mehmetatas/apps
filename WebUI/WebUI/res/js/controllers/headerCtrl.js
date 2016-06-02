app.controller("headerCtrl", ["$scope", "$state", function ($scope, $state) {
    $scope.apps = [
        { name: "Home", sref: "app.home", icon: "fa-home", active: false },
        { name: "Notes", sref: "app.notes", icon: "fa-file-text-o", active: false },
        { name: "File Manager", sref: "app.filemanager", icon: "fa-folder-o", active: false },
        { name: "Mail", sref: "app.mail", icon: "fa-envelope-o", active: false }
    ];

    $scope.isActive = function(app) {
        if ($state.current.name === app.sref) {
            $scope.currentApp = app;
            return true;
        }
        return false;
    }
}]);