app.controller("notesNoteCtrl", ["$scope", "$stateParams", function ($scope, $stateParams) {

    var content = "";

    for (var i = 0; i < 20; i++) {
        content += faker.lorem.paragraph() + "\n\n";
    }

    $scope.mode = 0;

    $scope.note = {
        title: faker.lorem.words(),
        content: content,
        html: markdown.toHTML(content)
    };

    $scope.edit = function () {
        $scope.mode = 1;

        $scope.noteEdit = {
            content: $scope.note.content
        };
    };

    $scope.save = function () {
        $scope.mode = 0;

        $scope.note.content = $scope.noteEdit.content;
        $scope.note.html = markdown.toHTML($scope.noteEdit.content);
    };

    $scope.cancel = function () {
        $scope.mode = 0;
    };
}]);
