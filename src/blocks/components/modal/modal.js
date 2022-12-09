const modal = document.querySelector('.modal'),
    modalTrigger = document.querySelectorAll('[data-modal]'),
    modalCloseBtn = document.querySelector('[data-close]');

if (modal) {
    modalScripts();
}

function modalScripts() {
    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('modal__show');
            modal.classList.remove('modal__hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal() {
        modal.classList.add('modal__hide');
        modal.classList.remove('modal__show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if(event.code === 'Escape' && modal.classList.contains('modal__show')) {
            closeModal();
        }
    });
}
