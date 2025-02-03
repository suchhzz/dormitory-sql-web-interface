import $ from 'jquery'

const conditionScript : string = "condition ts loaded";
console.log(conditionScript);



$(document).ready(function() {
    $('.condition-inner-button').click(function () {

    });


    $('.popup-insert-form').click(function(event) {
        event.stopPropagation();
    })


    $('.tab-item').click(function(e) {
        $('.tab-item').removeClass('active');
        $(this).addClass('active');

        const tabData = $(this).attr('data-insertConditionTab');

        if (tabData !== undefined) {
            setConditionBody(tabData);
        }

        

        e.stopPropagation();
    });
});

function setConditionBody(tabData : string) : void {
    $('.condition-field').removeClass('active');
    $('#' + tabData).addClass('active');
}