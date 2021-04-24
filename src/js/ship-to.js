let addressesList = [...document.querySelectorAll('.address-item')];

for(const address of addressesList) {
    address.addEventListener('click', () => {
        if(address.classList.contains('address-item-active')) {
            address.classList.remove('address-item-active');
        } else {
            [...document.querySelectorAll('.address-item-active')].map((item) => {
                item.classList.remove('address-item-active');
            });
            address.classList.add('address-item-active');
        }
    });
}