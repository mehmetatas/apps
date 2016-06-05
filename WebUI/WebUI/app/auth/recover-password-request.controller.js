(function () {
    "use strict";

    angular
        .module("app")
		.controller("RecoverPasswordRequestController", RecoverPasswordRequestController);

    RecoverPasswordRequestController.$inject = [];

    function RecoverPasswordRequestController() {
        var vm = this;

        // activate
        activate();

        function activate() {
            // TODO
        }

        // vm members
    }
})();