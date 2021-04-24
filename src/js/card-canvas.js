const dataCard = [
    {
        number: '6326 9124 8124 9875',
        name: 'Dominic Ovo',
        data: '19/2042'
    },
    {
        number: '6326 9124 8124 9875',
        name: 'Dominic Ovo',
        data: '19/2042'
    },
    {
        number: '6326 9124 8124 9875',
        name: 'Dominic Ovo',
        data: '19/2042'
    },
    {
        number: '6326 9124 8124 9875',
        name: 'Dominic Ovo',
        data: '19/2042'
    },
]

let cardList = [...document.querySelectorAll('.card-canvas')];
cardList.forEach((card) => {
   let id = card.getAttribute('data-key');
   drawCard(id, card);
});

function drawCard(id, canvas) {
    let ctx = canvas.getContext("2d");

    if(document.body.clientWidth >= 375) {
        initSizeNormal(canvas);
        initCardNumberNormal(ctx, id);

    } else {
        initSizeSmall(canvas);
        initCardNumberSmall(ctx, id);

    }
    initCircles(ctx);
    initCardHolder(ctx, id);
    initCardData(ctx, id);
}

function initSizeSmall(canvas) {
    canvas.setAttribute('height', 176);
    canvas.setAttribute('width', 290);
}

function initSizeNormal(canvas) {
    canvas.setAttribute('height', 190);
    canvas.setAttribute('width', 345);
}

function initCircles(ctx) {
    ctx.fillStyle = "rgba(196, 196, 196, .8)";
    ctx.arc(24,24,11,0,360);
    ctx.arc(38,24,11,0,360);
    ctx.fill();
}

function initCardNumberSmall(ctx, id) {
    ctx.fillStyle = "rgba(64, 191, 255, 1)";
    ctx.fillRect(0,0, 290, 176);
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "bold 24px 'Poppins', sans-serif";
    let cartText = dataCard[id - 1].number.split(' ');
    for(let i = 0, j = 0; i < cartText.length; j+=65,i++) {
        ctx.fillText(cartText[i],21 + j, 77);
    }
}

function initCardNumberNormal(ctx, id) {
    ctx.fillStyle = "rgba(64, 191, 255, 1)";
    ctx.fillRect(0,0, 345, 190);
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "bold 24px 'Poppins', sans-serif";
    let cartText = dataCard[id - 1].number.split(' ');
    for(let i = 0, j = 0; i < cartText.length; j+=80,i++) {
        ctx.fillText(cartText[i],21 + j, 77);
    }
}

function initCardHolder(ctx, id) {
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "10px 'Poppins', sans-serif";
    ctx.fillText('CARD HOLDER',21, 132);

    ctx.font = "bold 10px 'Poppins', sans-serif";
    ctx.fillText(dataCard[id - 1].name,21, 151);
}

function initCardData(ctx, id) {
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.font = "10px 'Poppins', sans-serif";
    ctx.fillText('CARD SAVE',131, 132);

    ctx.font = "bold 10px 'Poppins', sans-serif";
    ctx.fillText(dataCard[id - 1].name,131, 151);
}

import Splide from '@splidejs/splide';

new Splide( '.sale_slide', {
    arrows: false,
    pagination: true,
    rewind : true,
    autoWidth: true,
    gap: 30,
    focus: "center"
} ).mount();