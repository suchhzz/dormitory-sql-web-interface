import $ from 'jquery'

const conditionScript : string = "condition ts loaded";
console.log(conditionScript);

const CONDITION_TEMPLATE : string = "conditionTemplate";
const CONDITION_CUSTOM : string = "conditionCustom";

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
            setAddConditionButton(tabData);
        }        

        e.stopPropagation();
    });

    $('.template-item').click(function() {
        $('.template-item').removeClass('selected');
        $('.template-item').attr('data-selected', '0');
        $(this).addClass('selected');

        $(this).attr('data-selected', '1');
    });

    $('#addConditionButton').click(function() {

        const conditionType : any = $(this).attr('data-selectedtab');

        addCondition(conditionType);
    });
});



function setConditionBody(tabData : string) : void {
    $('.condition-field').removeClass('active');
    $('#' + tabData).addClass('active');
}

function setAddConditionButton(tabData : string) : void {
    $('#addConditionButton').attr('data-selectedtab', tabData);
}

function getSelectedItem() : JQuery {
    const selectedItem = $('.template-item').filter(function() {
        return $(this).attr('data-selected') === '1';
    })

    return selectedItem;
}

function incorrectValueButton($button : JQuery, delay : number) : void {
    $button.addClass('outline-red');
    
    setTimeout(() => {
        $button.removeClass('outline-red');
    }, delay);
}



function addCondition(conditionType : string) : void {
    if (conditionType === CONDITION_TEMPLATE) {
        const selectedItem : JQuery = getSelectedItem();

        if (selectedItem.length === 0) {
            console.log('choose element');

            incorrectValueButton($('#addConditionButton'), 500);

            return;
        }

        const itemValue : string = selectedItem.attr('data-value') || '';

        // const condition : Condition = {
            // value: itemValue,
        // }

        // save template sql string to array

        // display template sql string
        
    }
    else if (conditionType === CONDITION_CUSTOM) {

    }
}



$(document).ready(function() {
    
})