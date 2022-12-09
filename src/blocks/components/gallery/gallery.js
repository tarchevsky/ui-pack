import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox="gallery"]', {
    Thumbs: false,
    Toolbar: true,

    Image: {
        zoom: false,
        click: false,
        wheel: 'slide',
    },
});
