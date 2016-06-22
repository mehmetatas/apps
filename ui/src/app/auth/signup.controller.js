(function () {
    "use strict";

    angular
        .module("app")
		.controller("SignUpController", SignUpController);

    /* @ngInject */
    function SignUpController($http) {
        var vm = this;
        
        vm.email = "";
        vm.password = "";
        vm.signup = signup;
        vm.username = "";

        // activate
        activate();

        function activate() {
            // TODO
        }

        // vm members
        function signup() {
            $http({
                method: "POST",
                url: "/api/v1/auth/signup",
                data: {
                    username: vm.username,
                    email: vm.email,
                    password: vm.password
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function successCallback(response) {
                alert("ok");
            }, function errorCallback(response) {
                if (response.data.message) {
                    alert(response.data.message);
                }
                else {
                    alert("Unknown Error: " + JSON.stringify(response.data));
                }
            });
        }
    }
})();