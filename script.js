// Autocomplete
$(function () {
    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#tags").autocomplete({
        source: availableTags
    });
});
// Accordion
$(function () {
    $("#accordion").accordion();
});
//   Progressbar
$(function () {
    $("#progressbar").progressbar({
        value: 30
    });
});
// Slider
$(function () {
    $("#slider").slider();
});
// Tabs
$(function () {
    $("#tabs").tabs();
});
// Tooltip
$(function () {
    $(document).tooltip();
});
// Draggable
$(function () {
    $("#draggable").draggable();
});
// Dropabble
$(function () {
    $("#dragg").draggable();
    $("#droppable").droppable({
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
});
// Dialog
$(function () {
    $("#dialog").dialog();
});
// Selectable
$(function () {
    $("#selectable").selectable();
});