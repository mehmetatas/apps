app.controller("notesDirectoryCtrl", ["$scope", "$stateParams", function ($scope, $stateParams) {
    $scope.notes = [];

    for (var i = 0; i < 20; i++) {
        var title = faker.random.words();
        $scope.notes.push({
            title: title,
            code: title.toLowerCase().replace(/ /g, "-")
        });
    }
}]);
