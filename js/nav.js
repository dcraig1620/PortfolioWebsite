const menuBtn = document.querySelector('#menubtn');
const menuOpen = document.querySelector('#menubtn_open');
const menuClose = document.querySelector('#menubtn_close');
const mobileMenu = document.querySelector('.mobile-menu');

const workSection = document.querySelector('#mobilemenu-work');

function toggleMenu() {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    menuBtn.setAttribute('aria-expanded', !isExpanded);

    mobileMenu.setAttribute('aria-hidden', isExpanded);
    // console.log(isExpanded);
    // console.log(!isExpanded);

    if (!isExpanded) {
        menuClose.style.display = 'flex';
        menuOpen.style.display = 'none';
        mobileMenu.classList.add('open');
    } else {
        menuClose.style.display = 'none';
        menuOpen.style.display = 'flex';
        mobileMenu.classList.remove('open');
    }
}

menuBtn.addEventListener('click', () => {
    toggleMenu();
});

function hideMenu() {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    menuBtn.setAttribute('aria-expanded', !isExpanded);

    mobileMenu.setAttribute('aria-hidden', isExpanded);

    menuClose.style.display = 'none';
    menuOpen.style.display = 'flex';
    mobileMenu.classList.remove('open');
}

workSection.addEventListener('click', () => {
    hideMenu();
}
);