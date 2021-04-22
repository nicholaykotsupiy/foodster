let minValue;
let maxValue;
let maxRange;
let leftDot;
let rightDot;
let lineRange;
let widthRangeBox;
let minRange;
let widthRange;
let widthRangeWidth;
let numberPerPixel;

function drawRange() {
    minValue = document.querySelector('input[name=price_min]').value;
    maxValue = document.querySelector('input[name=price_max]').value;
    maxRange = document.querySelector('input[name=price_max]').getAttribute('max');
    leftDot = document.querySelector('.left-dot');
    rightDot = document.querySelector('.right-dot');
    lineRange = document.querySelector('.line-range');
    widthRangeBox = (maxValue - minValue) * 100 / maxRange;
    minRange = 100 - ((maxRange - minValue) * 100 / maxRange);
    widthRange = document.querySelector('.background-range');
    widthRangeWidth = widthRange.offsetWidth;
    numberPerPixel = maxRange / widthRangeWidth;

    lineRange.style.width = widthRangeBox + '%';
    rightDot.style.left = maxValue * 100 / maxRange + '%';
    lineRange.style.left = minRange + '%';
    leftDot.style.left = minRange + '%';
}
drawRange();

function leftDrag(event) {
    let position;
    leftDot.ondragstart = function() {
        return false;
    };
    document.querySelector('.price-range').onmousemove = mouseMove;
    leftDot.onmouseup = clearMove;

    document.querySelector('.price-range').ontouchmove = touchMove;
    document.querySelector('.price-range').ontouchend = clearMove;

    function mouseMove(event) {
        let e = event || window.event;
        position = e.pageX;
        let rightPosition = Math.floor(parseFloat(rightDot.style.left) * widthRange.clientWidth / 100 - 20);
        if(position >= 15 && (position - 16) <= rightPosition) {
            leftDot.style.left = position - 16 + 'px';
            document.querySelector('input[name=price_min]').value = Math.floor(numberPerPixel * parseFloat(leftDot.style.left));
            drawRange();
        }
        else {
            clearMove();
        }
    }

    function touchMove(event) {
        let e = event || window.event;
        position = e.touches[0].pageX;
        let rightPosition = Math.floor(parseFloat(rightDot.style.left) * widthRange.clientWidth / 100 - 20);
        if(position >= 16 && (position - 16) <= rightPosition) {
            leftDot.style.left = position - 16 + 'px';
            document.querySelector('input[name=price_min]').value = Math.floor(numberPerPixel * parseFloat(leftDot.style.left));
            drawRange();
        } else {
            clearMove();
        }
    }

    function clearMove() {
        document.onmousemove = null;
        leftDot.onmouseup = null;
    }
}

function rightDrag(event) {
    let position;
    rightDot.ondragstart = function() {
        return false;
    };
    document.querySelector('.price-range').onmousemove = mouseMove;
    rightDot.onmouseup = clearMove;

    document.querySelector('.price-range').ontouchmove = touchMove;
    document.querySelector('.price-range').ontouchend = clearMove;

    function mouseMove(event) {
        let e = event || window.event;
        position = e.pageX;
        let leftPosition = Math.floor(parseFloat(leftDot.style.left) * widthRange.clientWidth / 100 - 20);
        if(position > (leftPosition + 40) && position <= widthRangeWidth) {
            rightDot.style.left = position - 16 + 'px';
            document.querySelector('input[name=price_max]').value = Math.floor(numberPerPixel * parseFloat(rightDot.style.left));
            drawRange();
        }
        else {
            clearMove();
        }
    }

    function touchMove(event) {
        let e = event || window.event;
        position = e.touches[0].pageX;
        let leftPosition = Math.floor(parseFloat(leftDot.style.left) * widthRange.clientWidth / 100 - 20);
        if(position > (leftPosition + 40) && position < widthRangeWidth) {
            rightDot.style.left = position - 16 + 'px';
            document.querySelector('input[name=price_max]').value = Math.floor(numberPerPixel * parseFloat(rightDot.style.left));
            drawRange();
        } else if (position >= widthRangeWidth){
            rightDot.style.left = widthRangeWidth + 'px';
            document.querySelector('input[name=price_max]').value = Math.floor(numberPerPixel * parseFloat(rightDot.style.left));
            drawRange();
        } else {
            clearMove();
        }
    }
    function clearMove() {
        document.onmousemove = null;
        rightDot.onmouseup = null;

        document.ontouchmove = null;
        rightDot.ontouchend = null;
    }
}
leftDot.onmousedown = leftDrag;
rightDot.onmousedown = rightDrag;

leftDot.ontouchstart = leftDrag;
rightDot.ontouchstart = rightDrag;

document.querySelector('input[name=price_max]').addEventListener('input', function(event) {
    if(event.target.value <= maxRange) {
        drawRange();
    }
});
document.querySelector('input[name=price_min]').addEventListener('input', function(event) {
    if(event.target.value <= maxValue - 100) {
        drawRange();
    }
});