const burger = document.querySelector('.burger');

if (burger) {
    burgerScripts();
}

function burgerScripts() {
    const headerMenu = document.querySelector('.header-menu'),
        burgerInner = burger.querySelector('.burger__inner'),
        menuItem = document.querySelectorAll('.header-menu__item');

    // const dropDown = document.querySelector('.dropdown'),
    //     dropItems = document.querySelector('.dropdown__items'),
    //     dropItem = document.querySelectorAll('.dropdown__item');

    burgerListener();
    burgerCloseKeyDown();
    menuItemIteration();

    // dropdownInBurger(dropItem, dropItems);

    function overflowMenu () {
        if (burgerInner.classList.contains('burger__inner--active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

    function removeMenuActive() {
        burgerInner.classList.remove('burger__inner--active');
        headerMenu.classList.remove('header-menu--active');
        overflowMenu();
    }

    function burgerListener() {
        burger.addEventListener('click', () => {
            headerMenu.classList.toggle('header-menu--active');
            burgerInner.classList.toggle('burger__inner--active');

            // dropDown.classList.add('dropdown-burger');

            overflowMenu();
        });
    }

    function burgerCloseKeyDown() {
        document.addEventListener('keydown', (event) => {
            if(event.code === 'Escape' && burgerInner.classList.contains('burger__inner--active')) {
                removeMenuActive();
            }
        });
    }

    function menuItemIteration() {
        menuItem.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (! menuItem[i].querySelector('.dropdown')) {
                    removeMenuActive();
                }
            });
        });
    }

    // function dropdownInBurger(dropdownItem, dropDownItems) {
    //     dropdownItem.forEach((item) => {
    //         item.addEventListener('click', () => {
    //             removeMenuActive();
    //             dropDownItems.style.display = 'none';
    //         });
    //     });
    // }
}


