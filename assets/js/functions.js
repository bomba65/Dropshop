$( document ).ready(function() {  

  $('.nav-button').hover(function() {
    $(this).parent().addClass('opened');
  });

  $('.navbar-nav').mouseleave(function() {
    $(this).removeClass('opened');
  });

  $(".phone-number").inputmask({"mask": "+7 (799) 999-9999"});

  var arrowPrev = '<img class="prev-arrow" src="catalog/view/theme/default/img/yellow-arr.png" />';
  var arrowNext = '<img class="next-arrow" src="catalog/view/theme/default/img/yellow-arr.png" />';

  var arrowPrevGray = '<img class="prev-arrow" src="catalog/view/theme/default/img/arrow-breadcrumb.svg" style="width: 18px;" />';
  var arrowNextGray = '<img class="next-arrow" src="catalog/view/theme/default/img/arrow-breadcrumb.svg" style="width: 18px;" />';

  $('.product-slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-slider',
    focusOnSelect: true,
    prevArrow: arrowPrevGray,
    nextArrow: arrowNextGray,
    vertical: true,
    centerMode: true
  });

  $('.nav-child-banners').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });

  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-slider-nav'
  });

  $('.main-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: arrowPrev,
    nextArrow: arrowNext
  });


  $('.sub-categories').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }
    ]
  });
  //catalog/view/theme/default/img/yellow-arr.png
  $('.main-banner').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $('.section-videos .videos').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
      }
    }
    ]
  });
  $('.brand-zone').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    }
    ]
  });

  $('.categories-list').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: arrowPrev,
    nextArrow: arrowNext
  });

  $('.add-products').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: arrowPrevGray,
    nextArrow: arrowNextGray,
    responsive: [
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
      }
    }
    ]
  });


  var mainProductsSlick = {
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: arrowPrev,
    nextArrow: arrowNext,
    responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 996,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 767,
      settings: "unslick"
    }
    ]
  }
  $('.main-products').slick(mainProductsSlick);


  $('.video-text-show img').click(function() {
    $('.video-text-show').css('display', 'none');
    $('.video-text').css('height', '100%');
  });

  $('.mobile-sidebar .multiple').click(function() {
    $(this).toggleClass('active');
  });

  $('.filter-show-hidden').click(function() {
    if($(this).hasClass('active')) {
      $(this).parent().css('maxHeight', '13rem');
      $(this).removeClass('active');
    } else {
      $(this).parent().css('maxHeight', '100%');
      $(this).addClass('active');
    }
  });

  $('#other_city').hide();
  $('#city').change(function() {
    if($(this).val() == 'other') {
      $('#other_city').show();
    }
  })

  $('.nav-button').click(function() {
   $('.navbar-nav').toggleClass('opened');
 });
  $('.open-sidebar').click(function() {
    $('body').addClass('sidebar-visible');
  });
  $('.sidebar-closer, #contact').click(function() {
    $('body').removeClass('sidebar-visible');
  });

  $('.main-products').hide();
  $('.' + $('.section-main-products .products-links.active').data("target")).show();
  $(".section-main-products .products-links").click(function(){
    $(".section-main-products .products-links").removeClass("active");
    $(this).addClass("active");
    $('.section-main-products .heading-23 a').removeClass("active");
    $('.main-products').hide();
    $('.main-products').slick('unslick');
    $('.' + $(this).data("target") + '-all').addClass("active");
    $('.' + $(this).data("target")).show();
    $('.' + $(this).data("target")).slick(mainProductsSlick);
  })

  $('.product-sections-item').hide();
  $('.' + $('.section-names .section-names-item.active').data("target")).show();
  $(".section-names .section-names-item").click(function(){
    $(".section-names .section-names-item").removeClass("active");
    $(this).addClass("active");
    $('.product-sections-item').hide();
    $('.' + $(this).data("target")).show();
  })


  $('.multirange.original').oninput = function() {
    $('#min-price').val(5);
  }
  $('.multirange.original').change(function(){
    $('#min-price').val($('.multirange.original').val());
  });

  /* Quick Order */

  $('.popup-quick-order, .magnific-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });   
  
  $('header').waypoint(function(direction){
    if (window.matchMedia("(min-width: 768px)").matches) {
      if (direction == "down") {
        $('.navbar').addClass('sticky');
        $('.header-brand').css( { marginBottom : "50px"} );
      } else {
        $('.header-brand').css( { marginBottom : "0"} );
        $('.navbar').removeClass('sticky');
      }
    }
  }, {
    offset: '-119px'
  });
  
});

function quickOrder(productID) {
  $("input[name='product-id']").val(productID)
}