(function () {
    "use strict";

    mmtUtils.configureStates([
        {
            state: "app.notes",
            config: {
                url: "/notes",
                templateUrl: "app/notes/notes.html",
                controller: "NotesController",
                controllerAs: "vm"
            }
        },
        {
            state: "app.notes.category",
            config: {
                url: "/:cat",
                views: {
                    'category@app.notes': {
                        templateUrl: "app/notes/category.html",
                        controller: "CategoryController",
                        controllerAs: "vm"
                    }
                }
            }
        },
        {
            state: "app.notes.category.note",
            config: {
                url: "/:note",
                views: {
                    'note@app.notes.category': {
                        templateUrl: "app/notes/note.html",
                        controller: "NoteController",
                        controllerAs: "vm"
                    }
                }
            }
        }
    ]);
})();