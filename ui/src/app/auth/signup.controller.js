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
                url: "http://localhost:8080/api/v1/auth/signup",
                data: {
                    username: vm.username,
                    email: vm.email,
                    password: vm.password
                },
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }).then(function successCallback(response) {
                alert("ok");
            }, function errorCallback(response) {
                alert(response.data.message);
            });
        }
    }
})();