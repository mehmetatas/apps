(function () {
    "use strict";

    angular
		.module("app")
		.factory("markdownService", markdownService);

    markdownService.$inject = [];

    function markdownService() {
        return {
            toHTML: window.markdown.toHTML,
            toMarkdown: toMarkdown
        };
    }
})();