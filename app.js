$(document).ready(function(){

  $("#foo1").hide();
  $("#foo2").hide();
  $("#showsomething").click(function(){
    $("#foo1").slideToggle();
  });
  


  $("#showfacebook").click(function(){
    $("#foo2").slideToggle();
  });


});
