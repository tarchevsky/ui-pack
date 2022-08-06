const accordionHeading = document.querySelectorAll(".accordion__heading");

accordionHeading.forEach((event) => {
    event.addEventListener("click", () => {
        event.querySelector(".accordion__icon").classList.toggle("accordion__icon--active");
    });
});