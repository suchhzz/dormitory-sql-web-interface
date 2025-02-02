import $ from 'jquery';
let message: string = "typescript message";

$(document).ready(() => {
  $('#showLeftMenuPanelBtn, #closeLeftMenuPanelBtn').click(function() {
    $('#leftMenuPanel').toggleClass('active');
  });
  });

console.log(message);