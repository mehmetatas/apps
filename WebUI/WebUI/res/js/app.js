var app = angular.module("app", [
    "ui.router",
    "sun.scrollable",
    "ngSanitize"
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
    "$stateProvider", "$urlRouterProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        "use strict";

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
