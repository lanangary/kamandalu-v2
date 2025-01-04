class DiningAndOffer {
    constructor() {
        this.modules = document.querySelectorAll('.dining-and-offer');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.setFilter();
        this.popupExperience();
    }

    setFilter() {
        if (!document.querySelector('.dining-and-offer-heading-filter-button')) {
            return;
        }

        this.modules.forEach(module => {
            let filters = module.querySelectorAll(
                '.dining-and-offer-heading-filter-button'
            );
            let cards = module.querySelectorAll('.filter-card');

            filters.forEach(filter => {
                filter.addEventListener('click', () => {
                    // get data-filter attribute
                    let filterValue = filter.getAttribute('data-filter');

                    filters.forEach(filter => {
                        filter.classList.remove('active');
                    });

                    filter.classList.add('active');

                    cards.forEach(card => {
                        let cardValue = card.getAttribute('data-slug');
                        //dinner,indonesian cuisine,western cuisine

                        if (filterValue === 'all') {
                            card.style.display = 'block';
                        } else if (cardValue.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        });
    }

    popupExperience() {
        if (!document.querySelector('.experience-data')) {
            return;
        }

        const popup = document.querySelector('.experience-popup');
        let close = popup.querySelector('.experience-popup-close');

        close.addEventListener('click', () => {
            popup.classList.remove('active');
        });

        this.modules.forEach(module => {
            let buttons = module.querySelectorAll('.filter-card-button-details-toggle');
            let datawrap = module.querySelector('.experience-data');
            let dataList = datawrap.querySelectorAll('.experience-data-content');

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    let id = button.getAttribute('data-id');
                    let data = datawrap.querySelector(`[data-id="${id}"]`);

                    // get the innerHTML of the data and put it in the popup .experience-popup-section-content-desc
                    let image = data.querySelector('.experience-data-content-image')
                        .innerHTML;
                    let title = data.querySelector('.experience-data-content-title')
                        .innerHTML;
                    let desc = data.querySelector('.experience-data-content-desc')
                        .innerHTML;
                    let buttonlink = data.querySelector(
                        '.experience-data-content-button'
                    );

                    popup.querySelector(
                        '.experience-popup-section-image'
                    ).innerHTML = image;
                    popup.querySelector(
                        '.experience-popup-section-content-title'
                    ).innerHTML = title;
                    popup.querySelector(
                        '.experience-popup-section-content-desc'
                    ).innerHTML = desc;
                    popup.querySelector(
                        '.experience-popup-section-content-button'
                    ).innerHTML = buttonlink.innerHTML;

                    popup.classList.add('active');
                });
            });
        });
    }
}

const DiningAndOfferinit = new DiningAndOffer();
DiningAndOfferinit.init();
