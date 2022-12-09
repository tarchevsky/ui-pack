const dropdownExist = document.querySelector('.dropdown');

function dropdown(dropdown, items, dropdownActive) {
    function dropdownRemove() {
        items.style.color = '';
        setTimeout(function () {
            items.style.maxHeight = '0';
        }, 400);
        setTimeout(function () {
            items.style.display = 'none';
        }, 600);
    }

    function dropdownHideShow() {

        dropdown.addEventListener('mouseenter', (dropdownEvent));
        dropdown.addEventListener('mouseleave', (dropdownEvent));

        function dropdownEvent() {
            dropdown.classList.toggle(dropdownActive);

            if (!dropdown.classList.contains(dropdownActive)) {
                dropdownRemove(items);
            } else {
                items.style.display = 'block';
                items.style.maxHeight = `${items.scrollHeight}px`;
                setTimeout(() => {
                    items.style.color = '#fff';
                }, 100);
            }
        }
    }
    dropdownHideShow();
}

const dropDown = document.querySelector('.dropdown'),
    dropDownOptions = document.querySelector('.dropdown__items');

if (dropdownExist) {
    dropdown(dropDown, dropDownOptions, 'dropdown--active');
}