'use strict';

// add event on multiple elements
const addEventOnElem = function (elements, eventType, callback) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback)
    }
}

const $header = document.querySelector('[data-header]');
const $navbar = document.querySelector('[data-navbar]');
const $navToggler = document.querySelectorAll('[data-nav-toggler]');
const $overlay = document.querySelector('[data-overlay]');
const $dropdownToggler = document.querySelector('[data-dropdown-toggler]');
const $dropdown = document.querySelector('[data-dropdown]');
const $cartToggler = document.querySelector('[data-cart-toggler]');
const $cartModal = document.querySelector('[data-cart-modal]');

const toggleNavbar = function () {
    $navbar.classList.toggle('active');
    $overlay.classList.toggle('active');
    document.body.classList.toggle('active');
}

addEventOnElem($navToggler, 'click', toggleNavbar);

// element toggle function
const toggleElem = function (elem) {
    elem.classList.toggle('active');
} 

// toggle dropdown
$dropdownToggler.addEventListener('click', function () {
    toggleElem($dropdown);
});

// toggle cart
$cartToggler.addEventListener('click', function () {
    toggleElem($cartModal);
});

// header active when windows scrollY 50px
const activeHeader = function () {
    window.scrollY > 50 ? $header.classList.add('active') : $header.classList.remove('active');
}

window.addEventListener('scroll', activeHeader);