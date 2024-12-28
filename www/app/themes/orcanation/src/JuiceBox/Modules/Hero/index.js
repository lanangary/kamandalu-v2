import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class Hero {
    constructor() {
        this.modules = document.querySelectorAll('.module.hero');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.slider();
    }

    slider() {
        this.modules.forEach(module => {

            let newSwiper = module.querySelector('.swiper');
            const swiper = new Swiper(newSwiper, {
                modules: [Navigation, Pagination, EffectFade, Controller],
                autoHeight: true,
                slidesPerView: 'auto',
                preventInteractionOnTransition: true,
                pagination: {
                    el: module.querySelector('.swiper-pagination'), // Pagination outside the swiper container
                    clickable: true,
                    type: 'bullets'
                },
                navigation: {
                    prevEl: module.querySelector('.swiper-button-prev'), // Previous button outside the swiper container
                    nextEl: module.querySelector('.swiper-button-next') // Next button outside the swiper container
                },
                centeredSlides: true,
                roundLengths: true,
                loopAdditionalSlides: 30,
                initialSlide: 1
            });

        });
    }

}

const Heroinit = new Hero();
Heroinit.init();
