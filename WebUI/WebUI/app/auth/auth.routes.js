(function () {
    "use strict";

    window.mmtUtils.configureStates([
        {
            state: "signin",
            config: {
                url: "/signin",
                templateUrl: "app/auth/signin.html",
                controller: "SignInController",
                controllerAs: "vm"
            }
        },
        {
            state: "signup",
            config: {
                url: "/signup",
                templateUrl: "app/auth/signup.html",
                controller: "SignUpController",
                controllerAs: "vm"
            }
        },
        {
            state: "recoverPasswordRequest",
            config: {
                url: "/recoverPasswordRequest",
                templateUrl: "app/auth/recover-password-request.html",
                controller: "RecoverPasswordRequestController",
                controllerAs: "vm"
            }
        },
        {
            state: "recoverPasswordReset",
            config: {
                url: "/recoverPasswordReset",
                templateUrl: "app/auth/recover-password-reset.html",
                controller: "RecoverPasswordResetController",
                controllerAs: "vm"
            }
        },
        {
            state: "activation",
            config: {
                url: "/activation",
                templateUrl: "app/auth/activation.html",
                controller: "ActivationController",
                controllerAs: "vm"
            }
        }
    ]);
})();