import Splide from '@splidejs/splide';

new Splide( '.sale_slide', {
    arrows: false,
    autoplay: true,
} ).mount();

new Splide( '.category_slide', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();

new Splide( '.big-sale_slide', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();

new Splide( '.mega-sale_slide', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();