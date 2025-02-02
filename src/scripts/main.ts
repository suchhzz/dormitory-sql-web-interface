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
  })


  });

console.log(message);