import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class TextSlider {
    constructor() {
        this.modules = document.querySelectorAll('.module.text-slider');
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
                autoHeight: false,
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
                centeredSlides: false,
                roundLengths: true,
                loopAdditionalSlides: 30
            });
        });
    }
}

const TextSliderinit = new TextSlider();
TextSliderinit.init();
