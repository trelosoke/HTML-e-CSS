const tocElements = document.querySelectorAll('.menu ul a[href^="#"]');

tocElements.forEach(function(link) {
    link.addEventListener('click', function(elem) {
        elem.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if(target) {
            const headerHeight = document.querySelector('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            });
        }
    })
});

const themeButton = document.getElementById('theme-button');
const bodyElem = document.body;

themeButton.addEventListener('click', () => {
    const toggleTheme = bodyElem.classList.toggle('dark-theme');
   
    if (toggleTheme) {
        themeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        themeButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});