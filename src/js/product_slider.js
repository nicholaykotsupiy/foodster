import Splide from '@splidejs/splide';

new Splide( '.product_slider', {
    arrows: false,
    autoplay: true,
} ).mount();

new Splide( '.size_slider', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();

new Splide( '.color_slider', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();

new Splide( '.also-like', {
    arrows: false,
    pagination: false,
    rewind : true,
    autoWidth: true,
} ).mount();