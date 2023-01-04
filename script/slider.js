const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable:true
      },
      
  });

//   const swiperTwo = new Swiper(".secondSwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         // when window width is >= 320px
//         // 320: {
//         //   slidesPerView: 1,
//         //   spaceBetween: 20
//         // },
//         // when window width is >= 480px
//         0: {
//           slidesPerView: 1,
//         //   spaceBetween: 30
//         },
//         // when window width is >= 640px
//         576:{
//             slidesPerView: 2,
//             // spaceBetween: 40
//         },
//         1024:{
//             slidesPerView: 3,
//         },
//         1400:{
//             slidesPerView:4,
//         }

//       }
//   });