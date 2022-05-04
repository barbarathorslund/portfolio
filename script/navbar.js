burgerMenu = document.querySelector('.burger-menu')

// Toggle topnav__links className
function toggleMenuClickClass() {
    document.querySelector('.topnav__links').classList.toggle('topnav__links--menu-clicked')
}


toggle = false
// Toggle burger menu and close burger menu button
function toggleMenuIcon() {
    burgerMenu.classList.toggle('burger-menu-x');
    burgerMenu.classList.toggle('burger-menu');

    toggle = !toggle;
}

function displayBurgerMenu() {
    if (toggle) {
        toggleMenuIcon();
    }

    toggle = false;
}

// Remove menu clicked class when resize or scrolling
function removeMenuClickClass() {
    document.querySelector('.topnav__links').classList.remove('topnav__links--menu-clicked')
}

// Listen for click event on burger menu
burgerMenu.addEventListener('click', () => {
    toggleMenuClickClass();
    toggleMenuIcon();
});

// Listen for resize and scroll event
window.addEventListener('resize', () => {
    removeMenuClickClass();
    displayBurgerMenu();
});
window.addEventListener('scroll', () => {
    removeMenuClickClass();
    displayBurgerMenu();
});

// Scroll to section based on link clicked on navbar
function scrollToSection(index) {
    let pageSection = document.querySelector(`.main-section:nth-child(${index})`);
    pageSection.scrollIntoView({behavior: "smooth"});
}

const navbarLink = document.querySelectorAll('.topnav__link');

for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', () => {
        scrollToSection(i+2);
    });
};


// Navbar hide/show on scroll up/down functionality 
var lastScrollTop;
navbar = document.querySelector('.topnav');

window.addEventListener('scroll', () => {
    var scrollTop = window.pageYOffset || 
    document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top='-65px';
    } 
    else {
        navbar.style.top='0';
    }

    lastScrollTop = scrollTop;
});