(function () {
    "use strict";

    angular
		.module("app")
		.controller("CategoryController", CategoryController);

    CategoryController.$inject = [];

    function CategoryController() {
        var vm = this;

        vm.notes = [];
        vm.onMenuSelected = onMenuSelected;

        // activate

        activate();

        function activate() {
            loadNotes();
        }

        function loadNotes() {
            for (var i = 0; i < 20; i++) {
                var title = faker.random.words();
                vm.notes.push({
                    title: title,
                    code: title.toLowerCase().replace(/ /g, "-")
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