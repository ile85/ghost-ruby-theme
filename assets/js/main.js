document.addEventListener('DOMContentLoaded', function () {
    (function () {
        pagination(true);
    })();
    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Responsive Menu Toggle
    const burger = document.querySelector('.gh-burger');
    if (burger) {
        burger.addEventListener('click', () => {
            document.querySelector('.gh-head-menu').classList.toggle('is-active');
        });
    }

    // Basic Client-side Form Validation
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            let isValid = true;
            document.querySelectorAll('input[required], textarea[required]').forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                }
            });
            if (isValid) {
                event.target.submit();
            }
        });
    }

    // Dynamic Content Loading with AJAX
    function loadContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.querySelector('.content-placeholder').innerHTML = html;
            })
            .catch(error => console.error('Error loading the content: ', error));
    }

    // Debounce Function for Performance Optimization
    function debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
});
