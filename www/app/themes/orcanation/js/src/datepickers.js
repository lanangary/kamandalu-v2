import datepicker from 'js-datepicker';

class DatePickers {
    constructor() {
        this.modules = document.querySelector('.dater');
    }

    init() {
        if (!this.modules) {
            return;
        }

        this.dater();
    }

    dater() {
        let position = 'tl';

        // if (window.innerWidth < 768) {
        //     position = 'c';
        // }

        const properties = 'idbal31692';

        let elstart = this.modules.querySelector('.daterangepicker');
        let elend = this.modules.querySelector('.daterangepickerend');
        let button = this.modules.querySelector('.datergater');

        let bookstart = new Date();
        let bookend = new Date();

        const pickerstart = datepicker(elstart, {
            position: position,
            id: 1,
            minDate: new Date(), // Set the minimum date to today
            onSelect: instance => {
                // Show which date was selected.
                bookstart = formatDate(instance.dateSelected);
                console.log(bookstart);

                // Check if start date is later than end date
                if (new Date(bookstart) > new Date(bookend)) {
                    bookend = bookstart;
                    pickerend.setDate(new Date(bookstart), true); // Update end date
                }

                button.href = `https://www.book-secure.com/index.php?s=results&property=${properties}&arrival=${bookstart}&departure=${bookend}&adults1=1&children1=0&locale=en_GB&currency=IDR&stid=udbo2ur6g`;
            }
        });

        const pickerend = datepicker(elend, {
            position: position,
            id: 1,
            minDate: new Date(), // Set the minimum date to today
            onSelect: instance => {
                // Show which date was selected.
                console.log(instance.dateSelected);

                bookend = formatDate(instance.dateSelected);
                console.log(bookend);

                // Check if end date is earlier than start date
                if (new Date(bookend) < new Date(bookstart)) {
                    bookstart = bookend;
                    pickerstart.setDate(new Date(bookend), true); // Update start date
                }

                button.href = `https://www.book-secure.com/index.php?s=results&property=${properties}&arrival=${bookstart}&departure=${bookend}&adults1=1&children1=0&locale=en_GB&currency=IDR&stid=udbo2ur6g`;
            }
        });

        const daterWrap = this.modules.querySelectorAll('.dater-wrap');

        daterWrap.forEach(el => {
            el.addEventListener('click', e => {});
        });

        elstart.addEventListener('touchend', () => {
            console.log('start');
            pickerstart.show();
        });
    }
}

function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1; // Months are zero-based
    let year = date.getFullYear();

    // Add leading zeros if necessary
    if (day < 10) {
        day = '0' + day;
    }
    if (month < 10) {
        month = '0' + month;
    }

    return `${year}-${month}-${day}`;
}

const datePickersInit = new DatePickers();
datePickersInit.init();
