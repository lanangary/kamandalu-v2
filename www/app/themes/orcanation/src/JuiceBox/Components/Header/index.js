import mq from 'enquire.js';
import { Breakpoints } from 'JBSrc/constants';

jQuery($ => {
    const $burger = $('.hamburger');
    const $navContainer = $('.header__nav');
    const $toggle = $('.nav__toggle');

    $burger.on('click', () => {
        document.body.classList.toggle('nav-active');
    });

    $toggle.on('click', event => {
        const $this = $(event.currentTarget);

        $this
            .parent()
            .toggleClass('nav__li--submenu-open')
            .end()
            .next('.nav__submenu')
            .slideToggle();
    });

    mq.register(`screen and (max-width: ${Breakpoints.sm}px)`, {
        match: () => {
            $navContainer.detach().insertAfter('.page-wrap');
        },
        unmatch: () => {
            $navContainer.detach().insertAfter('.header__logo-wrapper');
        }
    });

    /**
     * JuiceBox Keyboard accessibility smooth scroll
     * each anchor tag in template.twig should have a href attribute
     * to tell this code where to skip to
     */
    const $keyboardNavs = $('.keyboard-nav a');

    $keyboardNavs.on('click', function(e) {
        e.preventDefault();
        const hash = $(e.target).attr('href');
        const $speed = $(e.target).data('speed') ? $(e.target).data('speed') : 800;

        window.scrollAnchorTo(hash, $speed);
    });
    let mainHeader = document.querySelector('#main-header');

    // add scroll class to header when scrolling up and remove when scrolling down and at top add top class
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        let currentScroll = window.scrollY;

        if (currentScroll > lastScroll) {
            mainHeader.classList.add('scroll-down');
            mainHeader.classList.remove('scroll-up');
        } else if (currentScroll < lastScroll) {
            mainHeader.classList.add('scroll-up');
            mainHeader.classList.remove('scroll-down');
        }

        if (currentScroll === 0) {
            mainHeader.classList.add('top');
        } else {
            mainHeader.classList.remove('top');
        }

        lastScroll = currentScroll;
    });

    // function to open child menu

    let hasChild = document.querySelectorAll('.menu-item-has-children');

    hasChild.forEach(item => {
        item.addEventListener('click', e => {
            console.log(e.currentTarget);
            if (!e.currentTarget.classList.contains('open')) {
                e.preventDefault();
            }

            item.classList.toggle('open');

            // add open to submenu
            let submenu = item.querySelector('.nav__submenu');
            submenu.classList.toggle('open');
        });
    });
});

function calculateheight() {
    const header = document.querySelector('.header');
    const allSubMenu = header.querySelectorAll('.nav__submenu');

    allSubMenu.forEach(submenu => {
        submenu.classList.add('init');

        const submenuHeight = submenu.offsetHeight;
        submenu.style.maxHeight = submenuHeight + 'px';
        // add style --height : submenuHeight to submenu
        submenu.style.setProperty('--height', submenuHeight + 'px');

        if (submenu.style.maxHeight !== '0px') {
            submenu.classList.remove('init');
        }

        submenu.classList.add('close');
    });
}

window.addEventListener('load', calculateheight);
window.addEventListener('resize', calculateheight);

function toogleSubMenu() {
    const btn = document.querySelector('.header-section-wrap-toogle');
    const headerSlideWrap = document.querySelector('.header-slide');

    let body = document.querySelector('body');
    let headerslide = document.querySelector('.header-slide');
    btn.addEventListener('click', () => {
        headerSlideWrap.classList.toggle('slide');
        body.classList.toggle('no-scroll');
        headerslide.classList.toggle('open');
    });
}

window.addEventListener('load', toogleSubMenu);

function globalpopup() {
    const popup = document.querySelectorAll('.global-popup');
    const outer = document.querySelector('.global-popup-outer');

    // after 10 seconds, add active class
    setTimeout(() => {
        outer.classList.add('active');
    }, 10000);

    popup.forEach(item => {
        item.classList.add('active');
        let close = item.querySelector('.global-popup-close');
        close.addEventListener('click', () => {
            item.classList.add('stop');
            outer.classList.remove('active');
        });

        let open = item.querySelector('.global-popup-preview-content-link a');
        open.addEventListener('click', e => {
            if (!item.classList.contains('show')) {
                e.preventDefault(); // Prevents the default link behavior
                e.stopPropagation(); // Prevents the event from bubbling up
            }

            popup.forEach(item => {
                item.classList.add('stop');
            });

            item.classList.remove('stop');
            item.classList.add('show');
        });
    });

    const popupLength = popup.length;
    let index = 0;
    console.log('start');

    const intervalId = setInterval(() => {
        console.log('index');

        let isstop = activepopup(index);
        index++;

        if (index === popupLength) {
            index = 0;
        }

        if (isstop) {
            // remove interval
            clearInterval(intervalId);
        }
    }, 6000);
}

function activepopup(index) {
    let popup = document.querySelectorAll('.global-popup');

    popup.forEach(item => {
        item.classList.remove('active');
    });

    popup[index].classList.add('active');

    if (popup[index].classList.contains('show')) {
        return true;
    } else {
        return false;
    }
}

window.addEventListener('load', globalpopup);
