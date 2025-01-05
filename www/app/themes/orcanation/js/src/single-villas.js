import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class singleVillas {
    constructor() {
        this.modules = document.querySelector(
            '.custom-single-villas-content-item-gallery'
        );
    }

    init() {
        if (!this.modules) {
            return;
        }

        this.slider();
    }

    slider() {
        let newSwiper = this.modules.querySelector('.swiper');
        console.log('single-villas.js loaded2');
        const swiper = new Swiper(newSwiper, {
            modules: [Navigation, Pagination, EffectFade, Controller],
            slidesPerView: 'auto',
            preventInteractionOnTransition: true,
            pagination: {
                el: this.modules.querySelector('.swiper-pagination'), // Pagination outside the swiper container
                clickable: true,
                type: 'fraction'
            },
            navigation: {
                prevEl: this.modules.querySelector('.swiper-button-prev'), // Previous button outside the swiper container
                nextEl: this.modules.querySelector('.swiper-button-next') // Next button outside the swiper container
            },
            centeredSlides: true,
            roundLengths: true,
            loopAdditionalSlides: 30,
            initialSlide: 0,
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
    }
}

const singleVillasinit = new singleVillas();
singleVillasinit.init();
