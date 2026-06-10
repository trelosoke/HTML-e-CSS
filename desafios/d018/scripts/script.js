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