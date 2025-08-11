
  const navbar = document.querySelector('.navbar');
  const menuBtn = document.querySelector('.navbar-toggler');
  const mobileMenu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Open menu
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    overlay.classList.add('active');
  });

  // Close menu
  const closeMenu = () => {
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
  };
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close when clicking a link
  document.querySelectorAll('.mobile-menu .nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });


  // 

  let inspiredSlideIndex = 0;
const track = document.getElementById('inspiredTrack');
const cards = document.querySelectorAll('.inspired-card');
const totalCards = cards.length;

function slideInspired(direction) {
  const cardWidth = cards[0].offsetWidth + 20; // card width + gap
  const visibleCards = Math.floor(document.querySelector('.inspired-slider').offsetWidth / cardWidth);

  // Update index
  inspiredSlideIndex += direction;

  // Looping logic
  if (inspiredSlideIndex < 0) {
    inspiredSlideIndex = totalCards - visibleCards;
  } else if (inspiredSlideIndex > totalCards - visibleCards) {
    inspiredSlideIndex = 0;
  }

  // Move track
  track.style.transform = `translateX(-${inspiredSlideIndex * cardWidth}px)`;
}

// Optional: Autoplay
setInterval(() => slideInspired(1), 4000); 



  // Swiper JS
  // Initialize Testimonial Slider
document.addEventListener('DOMContentLoaded', function() {
  const testimonialSwiper = new Swiper('.testimonialSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
  });
});

// Partner Slider


  const partnerSwiper = new Swiper(".logoSwiper", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
    },
  });



