import $ from 'jquery';
let message: string = "typescript message";

$(document).ready(() => {
  $('#showLeftMenuPanelBtn, #closeLeftMenuPanelBtn').click(function() {
    $('#leftMenuPanel').toggleClass('active');
  });

  $('#insertBtn').click(function() {
    $('#insertModal').toggleClass('active');
  });

  $('#selectBtn').click(function() {
    $('#selectModal').toggleClass('active');
  });

  $('.close-button-modal').click(function() {
    $('.modal').removeClass('active');
  });


  

  // select modal column

  $('.column-item').click(function () {
    $(this).toggleClass('selected');
  });

  // option function click 

  $('.option--function').click(function (event) {
    $(this).find('.option-menu').toggleClass('active');
    event.stopPropagation();
  });

  $('.option-menu--item-function').click(function (event) {
    $('.option-menu--item-function').removeClass('active');
    $(this).addClass('active');

    const parentColumnItem = $(this).closest('.column-item') as JQuery<HTMLElement>;
    const functionOption = $(this).attr('data-columnOptionFunction'); 

    if (functionOption !== undefined) {
      parentColumnItem.attr('data-functionOption', functionOption);
    }
    event.stopPropagation();
  }); 

  // option alias click

  $('.option--alias').click(function(event) {
    $(this).find('.option-menu').toggleClass('active');
    event.stopPropagation();
  });

  $('.option-menu').click(function (event) {
    event.stopPropagation();
  });

  $('.option-alias-change-btn').on('click', function() {
    const inputValue = $(this).closest('.input-container').find('.form-item-input').val() as string;

    const parentColumnItem = $(this).closest('.column-item') as JQuery<HTMLElement>;

    parentColumnItem.attr('data-aliasOption', inputValue);
  });


  });

console.log(message);