$(document).ready(function(){
  $(".login").hide();
  $(".registro_li").addClass("active");

  $(".login_li").click(function(){
    $(this).addClass("active");
    $(".registro_li").removeClass("active");
    $(".login").show();
    $(".register").hide();
  });

  $(".registro_li").click(function(){
    $(this).addClass("active");
    $(".login_li").removeClass("active");
    $(".register").show();
    $(".login").hide();
  });
});
