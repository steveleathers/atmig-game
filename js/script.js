$(document).ready(function() {
  $('#person1 .green-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.correct').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.incorrect').addClass('sr-only');
  });
  $('#person1 .red-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.incorrect').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.correct').addClass('sr-only');
  });

  $('#person2 .green-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.correct').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.incorrect').addClass('sr-only');
  });
  $('#person2 .red-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.incorrect').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.correct').addClass('sr-only');
  });

  $('#person3 .green-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.correct').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.incorrect').addClass('sr-only');
  });
  $('#person3 .red-button').click(function(){
    $(this).parent().parent().children('div.overlay').children('p.incorrect').removeClass('hidden');
    $(this).parent().parent().children('div.overlay').children('p.correct').addClass('sr-only');
  });
});
