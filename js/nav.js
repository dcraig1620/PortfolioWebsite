// Mobile menu variables
const menuBtn = document.querySelector('#menubtn');
const menuOpen = document.querySelector('#menubtn_open');
const menuClose = document.querySelector('#menubtn_close');
const mobileMenu = document.querySelector('.mobile-menu');

// Work section specific variables
const workSectionLink = document.querySelector('#mobilemenu-work');

// Mobile Menu
function toggleMenu() {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';

    menuBtn.setAttribute('aria-expanded', !isExpanded);

    mobileMenu.setAttribute('aria-hidden', isExpanded);

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

// Close mobile menu when work link is clicked
workSectionLink.addEventListener('click', () => {
    hideMenu();
});