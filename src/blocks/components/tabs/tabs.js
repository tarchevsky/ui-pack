const parent = document.querySelector(".tabs"),
    panelItem = document.querySelectorAll(".tabs-panel__item"),
    panelItemActive = document.querySelector(".tabs-panel__item--active"),
    contentItem = document.querySelectorAll(".tabs-content__item"),
    contentItemActive = document.querySelector(".tabs-content__item--active");

function hideContent() {
    panelItem.forEach((item) => {
        item.classList.remove("tabs-panel__item--active");
    });
    contentItem.forEach((item) => {
        item.style.display = "";
        item.classList.remove("tabs-content__item--active");
    });
}

function showContent(i = 0) {
    contentItem[i].style.display = "block";
    panelItem[i].classList.add("tabs-panel__item--active");
    contentItem[i].classList.add("tabs-content__item--active");
}

showContent();

function tabsTagsTabActivation() {
    parent.addEventListener("click", (e) => {
        const target = e.target;

        if (target && target.classList.contains("tabs-panel__item") && !target.classList.contains("tabs-panel__item--active")) {
            panelItem.forEach((item, i) => {
                if (target === item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}

tabsTagsTabActivation();