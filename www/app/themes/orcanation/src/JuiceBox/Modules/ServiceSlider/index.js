import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class ServiceSlider {
    constructor() {
        this.modules = document.querySelectorAll('.module.service-slider');
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
                navigation: {
                    prevEl: module.querySelector('.service-slider-navigation-prev'), // Previous button outside the swiper container
                    nextEl: module.querySelector('.service-slider-navigation-next') // Next button outside the swiper container
                },
                centeredSlides: false,
                roundLengths: true,
                loopAdditionalSlides: 30,
  
            });

        });
    }

}

const ServiceSliderInit = new ServiceSlider();
ServiceSliderInit.init();
