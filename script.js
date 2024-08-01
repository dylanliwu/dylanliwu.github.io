document.addEventListener('DOMContentLoaded', function() {
    let hamburger = document.querySelector('#hamburger');
    let menu = document.querySelector('.menu');

    hamburger.onclick = function() {
        menu.classList.toggle('show');
    }

    document.addEventListener('click', function(event) {
        let isClickInsideMenu = menu.contains(event.target);
        let isClickInsideHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideHamburger) {
            menu.classList.remove('show');
        }
    });
});