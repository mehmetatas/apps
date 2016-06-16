(function () {
    "use strict";

    angular
		.module("app")
		.factory("markdownService", markdownService);

    /* @ngInject */
    function markdownService() {
        return {
            toHTML: window.markdown.toHTML,
            toMarkdown: toMarkdown
        };
    }
})();