// Decleare variables
const navBar = document.querySelector("#myNav")
const navItems = document.querySelector("#nav__items");
const openNavBtn = document.querySelector("#nav__btn--open");
const closeNavBtn = document.querySelector("#nav__btn--close");
const navAu = document.querySelector(".nav__auth");
const body = document.querySelector("body");

// Responsive Navbar
openNavBtn.addEventListener('click', () => {
    navItems.style.display = "flex";
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
    navBar.classList.add("active");
    navAu.style.display = "flex";
    body.style.overflow = "hidden";
})

const closeNav = () => {
    navItems.style.display = "none";
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
    navBar.classList.remove("active");
    navAu.style.display = "none";
    body.style.overflow = "auto";
}

closeNavBtn.addEventListener("click", closeNav);
// Close Nav menu when a menu item is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll("#nav__items li a").forEach(navItems => {
        navItems.addEventListener('click', () => {
            closeNav();
        })
    })
}

// Change Navbar styles on scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

// Reponsive Pricing Section
const pricingWrapper = document.querySelector(".pricing__wrapper");
let pricingElement = document.getElementsByClassName("pricing__element");

if (window.innerWidth < 767) {
    pricingWrapper.classList.add("swiper-wrapper");
    // Loop through the HTMLCollection to add the class to each element
    for (let i = 0; i < pricingElement.length; i++) {
        pricingElement[i].classList.add("swiper-slide");
    };

    var swiper = new Swiper(".Swiper2", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".pricing__btn--next",
            prevEl: ".pricing__btn--prev",
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 767px
            767: {
                slidesPerView: 1
            }
        }
    });
}

// Testimonials Section 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        280: {
            slidesPerView: 1
        },
        // when window width is >= 767px
        767: {
            slidesPerView: 2
        },
        // when window width is >= 1024px
        1025: {
            slidesPerView: 3
        }
  }
});

