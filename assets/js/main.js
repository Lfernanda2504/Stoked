 $(document).ready(function(){
    const bannerSlide = $("#owl-banner-slide");
    bannerSlide.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true, 
        dots: true,
        loop: true,
        responsiveRefreshRate: 200
    })
    const offersCarousel = $("#owl-banner-offers");
    offersCarousel.owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav: false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
        }
    })
    
  });