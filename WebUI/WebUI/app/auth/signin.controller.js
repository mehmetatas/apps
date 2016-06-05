(function () {
    "use strict";

    angular
        .module("app")
		.controller("SignInController", SignInController);

    SignInController.$inject = [];

    function SignInController() {
        var vm = this;

        // activate
        activate();

        function activate() {
            // TODO
        }

        // vm members
    }
})();