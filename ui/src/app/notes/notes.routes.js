(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            "app.notes": {
                url: "/notes",
                templateUrl: "app/notes/notes.html",
                controller: "NotesController",
                controllerAs: "vm"
            },
            "app.notes.category": {
                url: "/:cat",
                views: {
                    "category@app.notes": {
                        templateUrl: "app/notes/category.html",
                        controller: "CategoryController",
                        controllerAs: "vm"
                    }
                }
            },
            "app.notes.category.note": {
                url: "/:note",
                views: {
                    "note@app.notes.category": {
                        templateUrl: "app/notes/note.html",
                        controller: "NoteController",
                        controllerAs: "vm"
                    }
                }
            }
        });
    }
})();