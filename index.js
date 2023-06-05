// MENU TOGGLE
const myMenu = document.querySelector('.menu-toggle');
const myList = document.querySelector('.nav__menu');

myMenu.addEventListener('click', () => {
    myMenu.classList.toggle('show');
    myList.classList.toggle('show');
});

// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED
let navLinks = document.querySelectorAll('.nav__menu a');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        myList.classList.remove('show');
    })
})



// SWIPER JS CODE ==================
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


 