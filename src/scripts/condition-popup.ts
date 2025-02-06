import $ from 'jquery'

$(document).ready(function() {
    $('.popup-insert-form').click(function (event) {
        event.stopPropagation();
    })
});