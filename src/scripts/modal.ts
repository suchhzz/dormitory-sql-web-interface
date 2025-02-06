import $ from 'jquery'

function openConditionModal($button : JQueryElement) : void {
    clearConditionModals();
    $button.find('.popup-insert-form').addClass('active');
}

function clearConditionModals() : void {
    $('.popup-insert-form').removeClass('active');
}

$(document).ready(function() {
    $('.condition-inner-button').click(function() {
        console.log('click');
        
        openConditionModal($(this));
    });

    
});