(function () {
    "use strict";

    angular
        .module("app")
		.controller("SignupController", SignupController);

    /* @ngInject */
    function SignupController(authService) {
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
            var req = {
                username: vm.username,
                email: vm.email,
                password: vm.password
            };
            
            return authService
                .signup(req)
                .then(signupSuccess)
                .catch(signupFail);
            
            function signupSuccess(response) { 
                alert("success"); 
            }
            
            function signupFail(response, status, headers, config) { 
                alert("fail: " + JSON.stringify(response.data));
            }
        }
    }
})();