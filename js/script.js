$(document).ready(function() {
  $('#person1').click(function(){
    $(this).children('div.overlay').children('p.correct').removeClass('hidden');
  });

  $('#person2').click(function(){
    $(this).children('div.overlay').children('p.incorrect').removeClass('hidden');
  });

  $('#person3').click(function(){
    $(this).children('div.overlay').children('p.correct').removeClass('hidden');
  });
});
