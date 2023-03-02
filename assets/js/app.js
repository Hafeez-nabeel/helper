// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:24,
//     nav:false,
//     smartSpeed: 660,
//     responsive:{
//         0:{
//             items:1,
//         },

//         1000:{
//             items:2,
//             center: true,
//         }
//     }
// })
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  smartSpeed: 800,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2,
      center: true,
    },
  },
});
