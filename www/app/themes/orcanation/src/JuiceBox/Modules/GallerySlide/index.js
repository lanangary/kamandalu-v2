import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class GallerySlide {
    constructor() {
        this.modules = document.querySelectorAll('.module.simple-galery');
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
                    type: 'fraction'
                },
                navigation: {
                    prevEl: module.querySelector('.swiper-button-prev'), // Previous button outside the swiper container
                    nextEl: module.querySelector('.swiper-button-next') // Next button outside the swiper container
                },
                centeredSlides: true,
                roundLengths: true,
                loopAdditionalSlides: 30,
                initialSlide: 1,
                spaceBetween: 30,

                on: {
                    slideChange: function() {
                        setTimeout(() => {
                            console.log('onchange');
                            let content = newSwiper.querySelectorAll(
                                '.swiper-image-alt-item'
                            );
                            content.forEach(item => {
                                item.classList.remove('active');
                            });
                            content[swiper.realIndex].classList.add('active');
                        }, 200);
                    }
                }
            });
        });
    }
}

const GallerySlideinit = new GallerySlide();
GallerySlideinit.init();
