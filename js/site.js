// jQuery 3.x-style ready event and locally scoped $

$(document).ready(function () {
  $("#news-form").click(function () {
    alert("Thank you for subscribing to the Car Newsletter, you will recieve an email with more information soon.");
  });
}); 


jQuery(function($) {
    $('html').removeClass('nojs');
    $('html').addClass('hasjs');
  }
);

