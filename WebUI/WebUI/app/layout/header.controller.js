(function () {
    "use strict";

    angular
        .module("app")
		.controller("HeaderController", HeaderController);

    HeaderController.$inject = ["$state"];

    function HeaderController($state) {
        var vm = this;

        vm.apps = [];
        vm.isActive = isActive;

        // activate

        activate();

        function activate() {
            loadApps();
        }

        function loadApps() {
            vm.apps = [
                { name: "Home", sref: "app.home", icon: "fa-home", active: false },
                { name: "Notes", sref: "app.notes", icon: "fa-file-text-o", active: false },
                { name: "File Manager", sref: "app.filemanager", icon: "fa-folder-o", active: false },
                { name: "Mail", sref: "app.mail", icon: "fa-envelope-o", active: false }
            ];
        }

        // vm members

        function isActive(app) {
            if ($state.current.name === app.sref) {
                vm.currentApp = app;
                return true;
            }
            return false;
        }
    }
})();