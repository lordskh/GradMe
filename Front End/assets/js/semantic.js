$(document).ready(function() {

  $("body").css('background', '#e4e4e4');

  var height = $(".navbar").height();
  $(window).scroll(function(){
    if($(window).scrollTop() > (height)){
       $(".navbar").css('background', 'rgba(20,20,20,0.95)');
       $(".navbar .item").css('color','#ddd');
    } else{
       $(".navbar").css('background','none');
       $(".item").css('color','black');
    }
  });

  var prodHeight = $(".product.active").height();
  $(".products").css({
    height: prodHeight
  });
  function calcProductHeight() {
    prodHeight = $(".product.active").height();
    $(".products").css({
      height: prodHeight
    });
  }

  function animateContentColor() {
    var getProductColor = $(".product.active").attr("product-color");
    $("body").css({
      background: getProductColor
    });
    $(".title").css({
      color: getProductColor
    });
    $(".btn").css({
      color: getProductColor
    });
  }

  var productItem = $(".product"),
    productCurrentItem = productItem.filter(".active");
  var guideItem = $(".pointing .item"),
    guideCurrentItem = guideItem.filter(".active");
  var prevButton = $('<a class="btn" id="prev" href="#">Prev</a>');

  $(guideItem).on("click", function(e){
    e.preventDefault();
      var link = $(this).attr("href");
      var match = document.getElementById(link);
      productCurrentItem.removeClass("active");
      guideCurrentItem.removeClass("active");
      $(match).addClass("active");
      prodHeight = $(".product.active").height();
      $(".products").css({height: prodHeight});

      $(this).addClass("active");
    productCurrentItem = productItem.filter(".active");
    guideCurrentItem = guideItem.filter(".active");
  });

  $("#next").on("click", function(e) {
    e.preventDefault();

    var nxtItem = productCurrentItem.next();
    var nxtGuideItem = guideCurrentItem.next();
    productCurrentItem.removeClass("active");
    guideCurrentItem.removeClass("active");

    if ( nxtItem.is(productItem.first().next()) ) { 
      
      productCurrentItem = nxtItem.addClass("active");
      guideCurrentItem = nxtGuideItem.addClass("active");
      $(".cardFooter").prepend(prevButton);

    } else if ( nxtItem.is(productItem.last()) ) { 
      
      productCurrentItem = nxtItem.addClass("active");
      guideCurrentItem = nxtGuideItem.addClass("active");
      /* addButton detached and reattached in $(#prev) function */
      addButton = $("#next").detach(); 

      var submitButton = $('<input type="submit"></input').text("SUBMIT").addClass("ui button submit");
      $(".cardFooter").append(submitButton);

    } else {
      productCurrentItem = nxtItem.addClass("active");
      guideCurrentItem = nxtGuideItem.addClass("active");
    }
    calcProductHeight();
    animateContentColor();
  });

  $(prevButton).on("click", function(e) {
    e.preventDefault();

    var prvItem = productCurrentItem.prev();
    var prvGuideItem = guideCurrentItem.prev();
    productCurrentItem.removeClass("active");
    guideCurrentItem.removeClass("active");

    if ( productCurrentItem.is(productItem.first().next()) ) {

      productCurrentItem = prvItem.addClass("active");
      guideCurrentItem= prvGuideItem.addClass("active");
      prevButton = $(prevButton).detach();

    } else if ( prvItem.is(productItem.last().prev() ) ) { 
      
      productCurrentItem = prvItem.addClass("active");
      guideCurrentItem = prvGuideItem.addClass("active");
      $(".submit").remove();
      $(".cardFooter").append(addButton);

    } else {
      productCurrentItem = prvItem.addClass("active");
      guideCurrentItem = prvGuideItem.addClass("active");
    }
    calcProductHeight();
    animateContentColor();
  });

  $(".search").on("click", function() {
    var selected = $(".active .label").length;
    var currentHeight = prodHeight;
    $(".products").css({
      "height": currentHeight + 23*selected + "px",
    });
  });

});

/* search function */
$('.dropdown').dropdown({
  label: {
    duration: 0,
  },
  maxSelections: 3,
  debug: true,
  performance: true,
});