let paymentList = [...document.querySelectorAll('.payment')];

for(const payment of paymentList) {
    payment.addEventListener('click', () => {
        if(payment.classList.contains('active')) {
            payment.classList.remove('active');
        } else {
            [...document.querySelectorAll('.active')].map((item) => {
                item.classList.remove('active');
            });
            payment.classList.add('active');
        }
    });
}