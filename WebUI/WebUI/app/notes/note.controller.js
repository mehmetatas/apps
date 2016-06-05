(function () {
    "use strict";

    angular
		.module("app")
		.controller("NoteController", NoteController);

    NoteController.$inject = ["markdownService"];

    function NoteController(markdownService) {
        var vm = this;

        vm.MODE_VIEW = 0;
        vm.MODE_EDIT = 1;

        vm.cancel = cancel;
        vm.edit = edit;
        vm.markdown = {};
        vm.mode = vm.MODE_VIEW;
        vm.note = {};
        vm.save = save;

        // activate

        activate();

        function activate() {
            initFakeNote();
        }

        function initFakeNote() {
            var html = "";

            var tags = ["h3", "strong", "em", "blockquote"];

            for (var i = 0; i < 20; i++) {
                html += i < tags.length
                    ? "<" + tags[i] + ">"
                    : "<p>";

                html += faker.lorem.paragraph();

                html += i < tags.length
                    ? "</" + tags[i] + ">"
                    : "</p>";
            }

            vm.note = {
                html: html
            };
        }

        // vm members

        function edit() {
            vm.mode = vm.MODE_EDIT;

            vm.markdown = markdownService.toMarkdown(vm.note.html);
        };

        function save() {
            vm.mode = vm.MODE_VIEW;

            vm.note.html = markdownService.toHTML(vm.markdown);
        };

        function cancel() {
            vm.mode = vm.MODE_VIEW;
        };
    }
})();