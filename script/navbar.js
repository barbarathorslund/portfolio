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
    if (window.innerWidth > 750 || window.scrollY > 300) {
        document.querySelector('.topnav__links').classList.remove('topnav__links--menu-clicked')
    }
}