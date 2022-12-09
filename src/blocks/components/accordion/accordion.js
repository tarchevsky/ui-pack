const accordion = document.querySelector('.accordion'),
    accordionHeading = document.querySelectorAll('.accordion__heading'),
    accordionIcon = document.querySelectorAll('.accordion__icon'),
    accordionContent = document.querySelectorAll('.accordion__content');

if(accordion) {
    accordionForEach();
    window.addEventListener('resize', () => resizeContent());
}

function accordionForEach() {
    accordionHeading.forEach((header, i) => {
        header.addEventListener('click', () => { accordionBasic(i, accordionHeading, accordionIcon, accordionContent, 'accordion__heading--active', 'accordion__icon--active', 'accordion__content--active'); });
    });
}

function accordionSetTimeot(item, value) {
    setTimeout(() => {
        item.style.display = value;
    }, 1000);
}

function accordionBasic(i, heading, icon, content, headingActive, iconActive, contentActive) {
    if (!heading[i].classList.contains(headingActive)) {
        content.forEach(item => {
            item.classList.remove(contentActive);
            item.style.maxHeight = '';
            accordionSetTimeot(item, '');
        });
        content.forEach(item => {
            item.classList.remove(contentActive);
            item.style.maxHeight = '';
        });
        icon.forEach(item => {
            item.classList.remove(iconActive);
        });
        heading.forEach((item) => {
            item.classList.remove(headingActive);
        });
        heading[i].classList.add(headingActive);
        icon[i].classList.add(iconActive);
        content[i].classList.add(contentActive);
        accordionSetTimeot(content[i], 'block');
        content[i].style.display = 'block';
        content[i].style.maxHeight = `${content[i].scrollHeight}px`;
    } else {
        icon[i].classList.remove(iconActive);
        content[i].style.maxHeight = '';
        accordionSetTimeot(content[i], '');
        content[i].classList.remove(contentActive);
        heading[i].classList.remove(headingActive);
    }
}

function resizeContent() {
    const accordionContentActive = document.querySelector('.accordion__content--active');

    if (accordionContentActive && parseInt(accordionContentActive.style.maxHeight) !== accordionContentActive.scrollHeight) {
        accordionContentActive.style.maxHeight = `${accordionContentActive.scrollHeight}px`;
    }
}
