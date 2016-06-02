app.controller("notesCtrl", ["$scope", function ($scope) {

    $scope.directories = [];
    
    for (var i = 0; i < 20; i++) {
        var name = faker.random.words();
        $scope.directories.push({
            name: name,
            code: name.toLowerCase().replace(/ /g, "-")
        });
    }
}]);
