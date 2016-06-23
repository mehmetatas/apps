(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "signin": {
                url: "/signin",
                templateUrl: "app/auth/signin.html",
                controller: "SignInController",
                controllerAs: "vm"
            },
            "signup": {
                url: "/signup",
                templateUrl: "app/auth/signup.html",
                controller: "SignUpController",
                controllerAs: "vm"
            },
            "recoverPasswordRequest": {
                url: "/recoverPasswordRequest",
                templateUrl: "app/auth/recover-password-request.html",
                controller: "RecoverPasswordRequestController",
                controllerAs: "vm"
            },
            "recoverPasswordReset": {
                url: "/recoverPasswordReset",
                templateUrl: "app/auth/recover-password-reset.html",
                controller: "RecoverPasswordResetController",
                controllerAs: "vm"
            },
            "activation": {
                url: "/activation",
                templateUrl: "app/auth/activation.html",
                controller: "ActivationController",
                controllerAs: "vm"
            }
        });
    }
})();