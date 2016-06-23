(function () {
    "use strict";
    
    angular
        .module("app")
        .run(configureStates);

    /* @ngInject */
    function configureStates(routerHelper) {
        routerHelper.configureStates({
            viewBase: "app/notes/",
            states: {
                "app.notes": null,
                "app.notes.category": {
                    url: "/:cat",
                    views: {
                        "category@app.notes": null
                    }
                },
                "app.notes.category.note": {
                    url: "/:note",
                    views: {
                        "note@app.notes.category": null
                    }
                }
            }
        });
    }
})();