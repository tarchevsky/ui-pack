const showMore = document.querySelector('.show-more'),
    showMoreButtons = document.querySelectorAll('.show-more__button'),
    showMoreContent = document.querySelectorAll('.show-more__content'),
    showMoreParent = document.querySelector('.show-more__row');

if (showMore) {
    showMoreHideContent();
    clickShowMore();
    window.addEventListener('resize', () => resizeContent(showMoreContent));
}

function showMoreHideContent() {
    showMoreContent.forEach(item => {

        item.style.maxHeight = '';
        if (item.classList.contains('show-more__content--active')) {
            setTimeout(function () {
                item.style.display = 'none';
            }, 900);
        }
        item.classList.remove('show-more__content--active');

    });

    showMoreButtons.forEach(item => {
        item.classList.remove('show-more__button--active');
    });

}

function showMoreShowContent(i) {

    showMoreContent[i].style.display = 'block';
    showMoreButtons[i].classList.add('show-more__button--active');
    showMoreContent[i].classList.add('show-more__content--active');
    showMoreContent[i].style.maxHeight = `${showMoreContent[i].scrollHeight}px`;

}

function clickShowMore() {
    showMoreParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('show-more__button') && !target.classList.contains('show-more__button--active')) {
            showMoreButtons.forEach((item, i) => {
                if (target === item) {
                    showMoreHideContent();
                    showMoreShowContent(i);
                }
            });
        } else {
            showMoreButtons.forEach((item) => {
                if (target === item) {
                    showMoreHideContent();
                }
            });
        }
    });
}

function resizeContent(content) {
    content.forEach((item, i) => {
        if (parseInt(content[i].style.maxHeight) !== content[i].scrollHeight) {
            content[i].style.maxHeight = `${content[i].scrollHeight}px`;
        }
    });
}