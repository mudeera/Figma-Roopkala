


const swiper = new Swiper('.banner-swiper', {
    slidesPerView: "auto",
    loop: true,
    speed:1000,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,
    speed:1000,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


new Swiper('.swiper-swap', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed:1200,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      480: {
          slidesPerView: 2,
          spaceBetween: 24,
          resistanceRatio: 0.85
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      980: {
          slidesPerView: 4,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      1280: {
          slidesPerView: 4,
          spaceBetween: 32,
          resistanceRatio : 0
      }
  },
  });




  const swipers = new Swiper('.mobile-res-slider', {
    slidesPerView: "auto",
    loop: true,
    speed:1200,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


  new Swiper('.mobile-swiper--slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    speed:1200,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  new Swiper('.main-collection--responsive', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    speed:1200,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
    breakpoints: {
      480: {
          slidesPerView: 1,
          spaceBetween: 24,
          resistanceRatio: 0.85
      },
      768: {
          slidesPerView: 1,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      980: {
          slidesPerView: 1,
          spaceBetween: 28,
          resistanceRatio: 0.85
      },
      1280: {
          slidesPerView: 1,
          spaceBetween: 32,
          resistanceRatio : 0
      }
  },
  });
  new Swiper('.best-seller-slider', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    speed:1200,
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    
  //   breakpoints: {
  //     480: {
  //         slidesPerView: 1,
  //         spaceBetween: 24,
  //         resistanceRatio: 0.85
  //     },
  //     768: {
  //         slidesPerView: 1,
  //         spaceBetween: 28,
  //         resistanceRatio: 0.85
  //     },
  //     980: {
  //         slidesPerView: 1,
  //         spaceBetween: 28,
  //         resistanceRatio: 0.85
  //     },
  //     1280: {
  //         slidesPerView: 1,
  //         spaceBetween: 32,
  //         resistanceRatio : 0
  //     }
  // },
  });