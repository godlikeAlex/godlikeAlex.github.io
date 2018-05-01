(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

//hambugreg
(function () {
    var menuBurger = document.querySelector('.click_burger'),
        burgerMenuPuntks = document.querySelector('.all_punkts_menu_burger'),
        fixedMenu = document.querySelector('.burger_fixed_menu');

    menuBurger.addEventListener('click', function () {
        menuBurger.classList.toggle('active_menu__burger');
        fixedMenu.classList.toggle('burger_fixed_menu-active');
        for (var i = 0; i < fixedMenu.classList.length; i++) {
            if (fixedMenu.classList[i] == 'burger_fixed_menu-active') {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });

    burgerMenuPuntks.addEventListener('click', function (e) {
        e.preventDefault;
        for (var i = 0; i < fixedMenu.classList.length; i++) {
            if (fixedMenu.classList[i] === 'burger_fixed_menu-active') {
                document.body.style.overflow = '';
                console.log('q');
            }
        }
        menuBurger.classList.remove('active_menu__burger');
        fixedMenu.classList.remove('burger_fixed_menu-active');
    });
})();

//move menu on scroll
(function () {
    window.addEventListener('scroll', function (e) {
        var pageY = window.pageYOffset,
            menu = document.querySelector('.main_menu');
        if (pageY > 20) {
            menu.classList.add('main_menu-active');
        } else {
            menu.classList.remove('main_menu-active');
        }
    });
})();

},{}]},{},[1])

//# sourceMappingURL=maps/app.js.map
