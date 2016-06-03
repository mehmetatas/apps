app.controller("notesNoteCtrl", ["$scope", "$stateParams", function ($scope, $stateParams) {

    var markdown = "";

    for (var i = 0; i < 20; i++) {
        markdown += faker.lorem.paragraph() + "\n\n";
    }

    $scope.mode = 0;

    $scope.note = {
        title: faker.lorem.words(),
        markdown: markdown,
        html: window.markdown.toHTML(markdown)
    };

    $scope.edit = function () {
        $scope.mode = 1;

        $scope.markdown = {
            content: $scope.note.content
        };
    };

    $scope.save = function () {
        $scope.mode = 0;

        $scope.note.html = window.markdown.toHTML($scope.note.markdown);
    };

    $scope.cancel = function () {
        $scope.mode = 0;
    };
}]);
