// Listen for click event on burger menu
document.querySelector('.burger-menu').addEventListener('click', addMenuClickClass)

// Toggle topnav__links className and limited height on body
function addMenuClickClass() {
    document.querySelector('.topnav__links').classList.toggle('topnav__links--menu-clicked')
}

// Listen for resize and scroll event
window.addEventListener('resize', removeMenuClickClass)
window.addEventListener('scroll', removeMenuClickClass)

// Remove menu clicked class when resize or scrolling
function removeMenuClickClass() {
    if (window.innerWidth > 750 || window.scrollY > 1) {
        document.querySelector('.topnav__links').classList.remove('topnav__links--menu-clicked')
    }
}

function scrollToSection(index) {
    let pageSection = document.querySelector(`.main-section:nth-child(${index})`);
    console.log(pageSection);
    pageSection.scrollIntoView({behavior: "smooth"});
}

// Scroll to section based on link clicked on navbar
const navbarLink = document.querySelectorAll('.topnav__link');

for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', () => {
        scrollToSection(i+2);
    });
};

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