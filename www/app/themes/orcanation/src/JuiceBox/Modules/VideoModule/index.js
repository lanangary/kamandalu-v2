class VideoModule {
    constructor() {
        this.modules = document.querySelectorAll('.module.video-module');
    }

    init() {
        if (!this.modules.length) {
            return;
        }

        this.slider();
    }

    slider() {
        this.modules.forEach(module => {
            let video = module.querySelector('video');
            let button = module.querySelector('.video-module-layer');

            button.addEventListener('click', () => {
                if (video.paused) {
                    video.play();
                    video.controls = true;
                    button.classList.add('hidden');
                } else {
                    video.pause();
                    video.controls = false;
                    button.classList.remove('hidden');
                }
            });
        });
    }
}

const VideoModuleinit = new VideoModule();
VideoModuleinit.init();
