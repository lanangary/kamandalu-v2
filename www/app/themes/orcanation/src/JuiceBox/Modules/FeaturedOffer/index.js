import { Swiper } from 'swiper';
import { Autoplay, Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

class FeaturedOffer {
    constructor() {
        this.modules = document.querySelectorAll('.module.featured-offer');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.slider();

        //load when resize window and destroy first
        window.addEventListener('resize', () => {
            this.modules.forEach(module => {
                let newSwiper = module.querySelector('.swiper-featured-offer');
                if (newSwiper.swiper) {
                    newSwiper.swiper.destroy();
                }
            });
            this.slider();
        });
    }

    slider() {
        this.modules.forEach(module => {
            let newSwiper = module.querySelector('.swiper-featured-offer');
            const swiper = new Swiper(newSwiper, {
                modules: [Navigation, Pagination, EffectFade, Controller],
                autoHeight: true,
                slidesPerView: 'auto',
                preventInteractionOnTransition: true,
                navigation: {
                    prevEl: module.querySelector(
                        '.featured-offer-wrap-content-swiper-navigation-prev'
                    ), // Previous button outside the swiper container
                    nextEl: module.querySelector(
                        '.featured-offer-wrap-content-swiper-navigation-next'
                    ) // Next button outside the swiper container
                },
                centeredSlides: true,
                roundLengths: true,
                loopAdditionalSlides: 30,
                initialSlide: 1,
                on: {
                    slideChange: function() {
                        setTimeout(() => {
                            console.log('onchange');
                            let content = module.querySelectorAll(
                                '.featured-offer-wrap-content-swiper-item'
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

const FeaturedOfferInit = new FeaturedOffer();
FeaturedOfferInit.init();
