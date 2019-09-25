//smooth scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

//section team -- slick-slider
$(document).ready(function(){
  $('.responsive').slick({
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//section works gallery
$(function() {
  $("#works-block-hide").click(function() {
    $(".hidden-area").css("display", "none");

    $("#works-block-hide").css("display", "none");

    $("#works-block-display").css("display", "inline-block");
  });

  $("#works-block-display").click(function() {
    $(".hidden-area").css("display", "flex");

    $("#works-block-hide").css("display", "inline-block");

    $("#works-block-display").css("display", "none");
  });
});

