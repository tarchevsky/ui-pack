const dropdownLang = document.querySelector('.dropdown-lang'),
    dropdownLangParent = document.querySelector('.dropdown-lang__parent'),
    dropdownLangOptions = document.querySelector('.dropdown-lang__options'),
    dropdownLangItem = document.querySelectorAll('.dropdown-lang__item');

function dropdownLangHideShow() {
    function dropdownLangRemove() {
        dropdownLangOptions.style.maxHeight = '0';
        setTimeout(function () {
            dropdownLangOptions.style.display = 'none';
        }, 200);
        dropdownLangOptions.style.color = 'transparent';
    }

    dropdownLang.addEventListener('mouseenter', (dropdownLangEvent));
    dropdownLang.addEventListener('mouseleave', (dropdownLangEvent));

    function dropdownLangEvent() {
        dropdownLang.classList.toggle('dropdown-lang--active');

        if (!dropdownLang.classList.contains('dropdown-lang--active')) {
            dropdownLangRemove();
        } else {
            dropdownLangOptions.style.display = 'block';
            dropdownLangOptions.style.maxHeight = `${dropdownLangOptions.scrollHeight}px`;
            setTimeout(() => {
                dropdownLangOptions.style.color = '#fff';
            }, 100);
        }
    }
}

dropdownLangHideShow();

function dropdownLangClickPoint() {
    dropdownLang.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains('dropdown-lang__item')) {
            dropdownLangItem.forEach(item => {
                if (item === target) {
                    dropdownLangParent.placeholder = item.dataset.text;
                    changeURLLang();
                }
            });
        }

    });
}

dropdownLangClickPoint();

const langBase = {
    'menu-1': {
        'en': 'Homepage',
        'ru': 'Главная'
    },
    'menu-2': {
        'en': 'Contact us',
        'ru': 'Контакты'
    },
    'main-text': {
        'en': '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, quae!</p>\n<p>Lorem ipsum dolor sit amet.</p>\n<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quod?</p>',
        'ru': '<p>Съешь ещё этих мягких французских булок, да выпей [же] чаю.</p>\n<p>Съешь ещё этих мягких французских булок, да выпей [же] чаю.</p>\n<p>Съешь ещё этих мягких французских булок.</p>'
    },
};

function changeURLLang() {
    let lang = dropdownLangParent.placeholder;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
}

function changeLang() {
    const hash = location.hash.substring(1);

    if (hash !== '') {
        dropdownLangParent.placeholder = hash;
        for (const key in langBase) {
            let translateElem = document.querySelector('.lang-' + key);
            if (translateElem) {
                translateElem.innerHTML = langBase[key][hash];
            }
        }
    }
}

changeLang();
