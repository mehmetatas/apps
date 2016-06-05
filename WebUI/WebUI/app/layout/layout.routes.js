(function () {
	"use strict";

    mmtUtils.configureStates([
        {
            state: "app",
            config: {
            	url: "",
            	abstract: true,
            	templateUrl: "app/layout/app.html",
            	controller: "AppController"
            }
        }
    ]);
})();