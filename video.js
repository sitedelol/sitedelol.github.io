$(document).ready(function() {
    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);
    var $pane = $('#bgvideo');

    function checkWidth() {
        var windowsize = $window.width();
        if (windowsize < 780) {
            $('#bgvid').remove()
        }
    }
    // Execute on load
    checkWidth();
    // Bind event listener
    $(window).resize(checkWidth);
});