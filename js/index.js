const carousel = document.querySelector('.carousel-inner');
let index = 0;

function showNextSlide() {
    const items = document.querySelectorAll('.carousel-item');
    items[index].classList.remove('active'); // Remove active class from the current slide
    index = (index + 1) % items.length; // Move to the next slide (loop back to the first slide)
    items[index].classList.add('active'); // Add active class to the next slide
    carousel.style.transform = `translateX(-${index * 100}%)`; // Slide effect
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
