app.controller("notesCtrl", ["$scope", function ($scope) {

    $scope.directories = [];

    for (var i = 0; i < 20; i++) {
        var name = faker.random.words();
        $scope.directories.push({
            name: name,
            code: name.toLowerCase().replace(/ /g, "-")
        });
    }

    $scope.onMenuSelected = function(action, key) {
        var msg = "You selected the menu item '" + action +
            "' on the value '" + key + "'";
        alert(msg);
    };

    //$("ul.nav-main > li").contextMenu({
    //    menuSelector: "#dirContextMenu",
    //    menuSelected: function (invokedOn, selectedMenu) {
    //        var msg = "You selected the menu item '" + selectedMenu.text() +
    //            "' on the value '" + invokedOn.text() + "'";
    //        alert(msg);
    //    }
    //});
}]);