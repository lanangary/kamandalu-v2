import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class VillaListing {
    constructor() {
        this.modules = document.querySelectorAll('.villa-listing-section');
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
            let swiper = new Swiper(newSwiper, {
                modules: [Navigation, Pagination, EffectFade, Controller],
                autoHeight: false,
                slidesPerView: 'auto',
                preventInteractionOnTransition: true,
                navigation: {
                    prevEl: module.querySelector('.swiper-slider-navigation-prev'), // Previous button outside the swiper container
                    nextEl: module.querySelector('.swiper-slider-navigation-next') // Next button outside the swiper container
                },
                centeredSlides: false,
                roundLengths: true,
                loopAdditionalSlides: 30,
  
            });

        });
    }

}

const VillaListingInit = new VillaListing();
VillaListingInit.init();
