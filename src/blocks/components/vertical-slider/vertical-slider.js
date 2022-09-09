const downBtn = document.querySelector(".vertical-slider__down"),
    upBtn = document.querySelector(".vertical-slider__up"),
    wrapper = document.querySelector(".vertical-slider__wrapper"),
    sidebar = document.querySelector(".vertical-slider__sidebar"),
    mainSlide = document.querySelector(".vertical-slider__main-slide"),
    slidesCount = mainSlide.querySelectorAll("div").length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

downBtn.addEventListener("click", () => {
    changeSlide("down");
});

upBtn.addEventListener("click", () => {
    changeSlide("up");
});

function changeSlide(direction) {
    if (direction === "up") {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === "down") {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = 0;
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = wrapper.clientHeight;
    console.log(height);

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}