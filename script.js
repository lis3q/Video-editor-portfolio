import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

// Mobile navbar
const openNavBtn = document.querySelector(".open-nav-btn");
const closeNavBtn = document.querySelector(".close-nav-btn");
const navbar = document.querySelector("header nav")

openNavBtn.addEventListener("click", () => {
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "block"
    navbar.classList.add("active");
})

closeNavBtn.addEventListener("click", () => {
    openNavBtn.style.display = "block";
    closeNavBtn.style.display = "none"
    navbar.classList.remove("active");
})

// Closing mobile navbar when link clicked
const links = document.querySelectorAll("header nav a");
links.forEach(link => {
    link.addEventListener("click", () => {
        openNavBtn.style.display = "block";
        closeNavBtn.style.display = "none"
        navbar.classList.remove("active");
    })
})

// ScrollReveal
ScrollReveal().reveal('.hero h2, .hero h1, #skills video, .row, input, textarea, .section-heading', {
    delay: 300,
    duration: 700,
    origin: 'top',
    distance: '60px',
    interval: 200,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.hero p, .hero .buttons, #skills video, #works .container', {
    delay: 300,
    duration: 700,
    origin: 'bottom',
    distance: '60px',
    interval: 200,
    easing: 'ease-in-out'
});


// SwiperJs
const swiper = new Swiper('.swiper', {
  speed: 500,
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination-unique',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next-unique',
    prevEl: '.swiper-button-prev-unique',
  },

});


// EmailJS
emailjs.init("RoyLX7c-NdwFjq2hH");
document.querySelector('#contact .form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_rh45oth', 'template_wi887pn', '#contact .form').then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
            document.querySelector(".username").value = "";
            document.querySelector(".useremail").value = "";
            document.querySelector(".usermessage").value = "";

            document.querySelector(".submit-btn").value = "Message sent. Thank you!"
            document.querySelector(".submit-btn").style.background = "var(--primary)";
            document.querySelector(".submit-btn").style.color = "var(--white)";
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
});

// Playing video after click
const videos = document.querySelectorAll('.skill-video');

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();  
        } else {
            video.pause(); 
        }
    });
});