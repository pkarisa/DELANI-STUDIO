$("document").ready(function(){
    $(".portfolio-img").hover(function(e){
        const target= e.target;
        if(target.matches("img")){
            const titlename =target.alt.toUpperCase();
            $(target).prop("title",titlename);
        }
    })
});

$(document).ready(function() {

    $("#design-image").click(function(){

      $("#design").toggle();

      $(".hide-design-image").toggle();

    })

     $("#development-image").click(function(){

      $("#development").toggle();

      $(".hide-development-image").toggle();

    })

     $("#product-image").click(function(){

      $("#product").toggle();

      $(".hide-product-image").toggle();

    })

  })