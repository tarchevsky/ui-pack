const flexGallery = document.querySelector('.flex-gallery');

if (flexGallery) {
    fgSlidesPlugin();
}

function fgSlidesPlugin(activeSlide = 1) {
    const fgSlides = document.querySelectorAll('.flex-gallery__slide');

    fgSlides[activeSlide].classList.add('flex-gallery__slide--active');

    for (const slide of fgSlides) {
        slide.addEventListener('click', activeFG);
        slide.addEventListener('mouseenter', activeFG);

        function activeFG() {
            clearFG();
            slide.classList.add('flex-gallery__slide--active');
        }
    }

    function clearFG() {
        fgSlides.forEach((slide) => {
            slide.classList.remove('flex-gallery__slide--active');
        });
    }
}