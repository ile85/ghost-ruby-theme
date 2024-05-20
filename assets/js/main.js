document.addEventListener('DOMContentLoaded', () => {
    initPagination();
    initSmoothScrolling();
    initResponsiveMenu();
    initFormValidation();
    initDynamicContentLoading();
});

function initPagination() {
    pagination(true);
}

function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', smoothScroll);
    });
}

function smoothScroll(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
}

function initResponsiveMenu() {
    const burger = document.querySelector('.gh-burger');
    if (burger) {
        burger.addEventListener('click', toggleMenu);
    }
}

function toggleMenu() {
    document.querySelector('.gh-head-menu').classList.toggle('is-active');
}

function initFormValidation() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
}

function validateForm(event) {
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
}

function initDynamicContentLoading() {
    document.querySelectorAll('[data-load]').forEach(element => {
        element.addEventListener('click', () => {
            const url = element.getAttribute('data-load');
            if (url) {
                loadContent(url);
            }
        });
    });
}

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
}
