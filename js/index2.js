$(function(){
  $('.list li').click( function(){
    $('.list li .sub-list').stop().slideToggle();
  })
})