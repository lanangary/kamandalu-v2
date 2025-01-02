class DiningAndOffer {
    constructor() {
        this.modules = document.querySelectorAll('.dining-and-offer');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.setFilter();
    }

    setFilter() {
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
}

const DiningAndOfferinit = new DiningAndOffer();
DiningAndOfferinit.init();
