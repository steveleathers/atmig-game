$(document).ready(function() {
  $('.person').click(function(){
      $(this).children('div.overlay').children('p').toggleClass('hidden');
  });
});
