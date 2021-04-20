let ratingProductList = Array.from(document.querySelectorAll('.product_reiting .reting_list .item')).reverse()
let ratingProduct = document.querySelector('.product_reiting .reting_list')


ratingProduct.addEventListener('click', event => {
    ratingProductList.forEach(item => {
        if (item.classList.contains('active')) {
            item.classList.remove('active')
        }
    })
    for (let i = 0; i < event.target.dataset.value; i++) {
        ratingProductList[i].classList.add('active')
    }
})
