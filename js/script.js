$(document).ready(function() {
  $("#person1 .green-button").click(function(){
    $(this).parent().parent().children('p.correct').removeClass('hidden');
    $(this).parent().parent().children('p.incorrect').addClass('sr-only');
  });
  $('#person1 .red-button').click(function(){
    $(this).parent().parent().children('p.incorrect').removeClass('hidden');
    $(this).parent().parent().children('p.correct').addClass('sr-only');
  });
});
