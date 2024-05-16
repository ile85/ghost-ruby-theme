document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById('hero');

    if (heroSection) {
        window.addEventListener('scroll', () => {
            const {scrollTop, clientHeight} = document.documentElement;
            heroSection.style.opacity = 1 - scrollTop / clientHeight;
        });
    } else {
        console.error('Hero section not found!');
    }
});
