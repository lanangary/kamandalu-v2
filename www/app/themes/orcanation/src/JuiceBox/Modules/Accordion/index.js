class accordion {
    constructor() {
        this.modules = document.querySelectorAll('.module.accordion');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.dynamiccalculation();
        console.log('Accordion initialized');
    }

    dynamiccalculation() {
        var acc = document.getElementsByClassName('accordion');
        var i;

        const padding = window.innerWidth >= 1440 ? 32 : 16;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener('click', function() {
                this.classList.toggle('active');
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    panel.classList.remove('active');
                } else {
                    panel.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight * 1.5 + padding + 'px';
                }
            });
        }
    }
}

const accordioninit = new accordion();
accordioninit.init();
