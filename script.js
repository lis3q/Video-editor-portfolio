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

// Back to home button
window.addEventListener('scroll', function() {
    const backToTopBtn = document.querySelector('.back-home-btn');
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
  
    if (scrollPosition > windowHeight) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });