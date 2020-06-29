let deleteIcon = document.getElementById('main-container-header__delete-icon');

deleteIcon.addEventListener('click', e => {
    e.preventDefault();

    let modalWindow = document.getElementById('modal-window');
    modalWindow.classList.add('modal-window_active');
    document.body.style.overflow = 'hidden';

    let overlay = document.getElementById('overlay');
    overlay.classList.add('overlay_active');

    let cancelBtn = document.getElementById('modal-window__cancel-btn');
    cancelBtn.addEventListener('click', e => {
        e.preventDefault();
        modalWindow.classList.remove('modal-window_active');
        overlay.classList.remove('overlay_active');
        document.body.style.overflow = 'auto';
    });
});

