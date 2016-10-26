$(document).ready(function(){

  $("#foo1").hide();
  $("#foo2").hide();
  $("#foo3").hide();
  $("#showsomething").click(function(){
    $("#foo1").slideToggle();
  });

  $("#showfacebook").click(function(){
    $("#foo2").slideToggle();
  });

  $("#showig").click(function(){
    $("#foo3").slideToggle();
  });


});
