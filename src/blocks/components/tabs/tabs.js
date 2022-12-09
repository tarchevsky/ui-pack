const tabs = document.querySelector('.tabs'),
    panelItem = document.querySelectorAll('.tabs-panel__item'),
    contentItem = document.querySelectorAll('.tabs-content__item');

if (tabs) {
    showContent();
    tabsTagsTabActivation();
}

function hideContent() {
    panelItem.forEach((item) => {
        item.classList.remove('tabs-panel__item--active');
    });
    contentItem.forEach((item) => {
        item.style.display = '';
        item.classList.remove('tabs-content__item--active');
    });
}

function showContent(i = 0) {
    contentItem[i].style.display = 'block';
    panelItem[i].classList.add('tabs-panel__item--active');
    contentItem[i].classList.add('tabs-content__item--active');
}

function tabsTagsTabActivation() {
    tabs.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('tabs-panel__item') && !target.classList.contains('tabs-panel__item--active')) {
            panelItem.forEach((item, i) => {
                if (target === item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
}