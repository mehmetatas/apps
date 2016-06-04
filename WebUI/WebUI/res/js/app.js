var app = angular.module("app", [
    "ngSanitize",
    "ngAnimate",
    "ui.router",
    "sun.scrollable"
]).run([
    "$rootScope", "$state", "$stateParams",
    function ($rootScope, $state, $stateParams) {
        // User information
        $rootScope.user = {
            name: "Jimmie Stevens",
            job: "Developer",
            picture: "app/img/user/02.jpg"
        };
    }
]).config([
    "$stateProvider", "$urlRouterProvider", "$locationProvider", "nanoScrollerDefaults",
function ($stateProvider, $urlRouterProvider, $locationProvider, nanoScrollerDefaults) {
    "use strict";
    
    nanoScrollerDefaults.flash = true;

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });

    // default route to dashboard
    $urlRouterProvider.otherwise("/");

    //
    // app Routes
    // -----------------------------------
    $stateProvider
        // Auth
        // -----------------------------------
        .state("signin", {
            url: "/signin",
            templateUrl: "res/html/signin.html",
            controller: "signinCtrl"
        })
        .state("signup", {
            url: "/signup",
            templateUrl: "res/html/signup.html",
            controller: "signupCtrl"
        })
        .state("recoverPasswordRequest", {
            url: "/recoverPasswordRequest",
            templateUrl: "res/html/recover-password-request.html",
            controller: "recoverPasswordRequestCtrl"
        })
        .state("recoverPasswordReset", {
            url: "/recoverPasswordReset",
            templateUrl: "res/html/recover-password-reset.html",
            controller: "recoverPasswordResetCtrl"
        })
        .state("activation", {
            url: "/activation",
            templateUrl: "res/html/activation.html",
            controller: "activationCtrl"
        })
        // App
        // -----------------------------------
        .state("app", {
            url: "",
            abstract: true,
            templateUrl: "res/html/app.html",
            controller: "appCtrl"
        })
        // Home
        // -----------------------------------
        .state("app.home", {
            url: "/",
            templateUrl: "res/html/home.html"
        })
        // Note
        // -----------------------------------
        .state("app.notes", {
            url: "/notes",
            templateUrl: "res/html/notes.html",
            controller: "notesCtrl"
        })
        .state("app.notes.directory", {
            url: "/:dir",
            views: {
                'directory@app.notes': {
                    templateUrl: "res/html/notes-directory.html",
                    controller: "notesDirectoryCtrl"
                }
            }
        })
        .state("app.notes.directory.note", {
            url: "/:note",
            views: {
                'note@app.notes.directory': {
                    templateUrl: "res/html/notes-directory-note.html",
                    controller: "notesNoteCtrl"
                }
            }
        })
        // File Manager
        // -----------------------------------
        .state("app.filemanager", {
            url: "/filemanager",
            templateUrl: "res/html/filemanager.html"
        })
        // Mail
        // -----------------------------------
        .state("app.mail", {
            url: "/mail",
            templateUrl: "res/html/mail.html"
        });

    /*.state("app.mailbox.view", {
        url: "/:id",
        views: {
            'mails@app.mailbox': {
                controller: "mailViewCtrl",
                resolve: requireDeps(ctrl("mailViewCtrl")),
                templateUrl: basepath("mailbox-view-mail.html")
            }
        }
    })*/
}
]).filter('to_trusted', ['$sce', function ($sce) {
    return function (text) {
        return $sce.trustAsHtml(text);
    };
}]);;
