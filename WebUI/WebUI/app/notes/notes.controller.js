(function () {
    "use strict";

    angular
		.module("app")
		.controller("NotesController", NotesController);

    NotesController.$inject = [];

    function NotesController() {
        var vm = this;

        vm.categories = [];
        vm.onMenuSelected = onMenuSelected;

        // activate

        activate();

        function activate() {
            loadCategories();
        }

        function loadCategories() {
            for (var i = 0; i < 20; i++) {
                var name = faker.random.words();
                vm.categories.push({
                    name: name,
                    code: name.toLowerCase().replace(/ /g, "-")
                });
            }
        }

        // vm members 

        function onMenuSelected(action, key) {
            var msg = "You selected the menu item '" + action +
                "' on the value '" + key + "'";
            alert(msg);
        }
    }
})();