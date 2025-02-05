let slideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide img');
    const totalSlides = slides.length;
    
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    const carousel = document.querySelector('.carousel-slide');
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

