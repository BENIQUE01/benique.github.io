document.addEventListener('DOMContentLoaded', function() {
    const galleryTrack = document.querySelector('.gallery-track');
    const galleryBtns = document.querySelectorAll('.gallery-btn');
    const totalSlides = galleryBtns.length;
    let currentSlide = 0;
    let autoPlayInterval;

    // Set first button as active
    galleryBtns[0].classList.add('active');

    // Button click handlers
    galleryBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            goToSlide(index);
            resetAutoPlay();
        });
    });

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -slideIndex * (100 / totalSlides);
        galleryTrack.style.transform = `translateX(${translateX}%)`;
        
        // Update active button
        galleryBtns.forEach(btn => btn.classList.remove('active'));
        galleryBtns[slideIndex].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 3000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    // Start autoplay
    startAutoPlay();

    // Pause on hover
    const galleryWindow = document.querySelector('.gallery-window');
    galleryWindow.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    galleryWindow.addEventListener('mouseleave', startAutoPlay);
});