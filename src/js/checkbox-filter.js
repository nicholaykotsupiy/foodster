let checkboxes = document.querySelectorAll('.checkbox-item');

for(let checkbox of checkboxes) {
    checkbox.addEventListener('click', function(event) {
        let modelName = event.target.getAttribute('data-model');
        let modelTag = document.querySelector('input[name=' + modelName + ']');
        let modelValues = modelTag.getAttribute('value').trim().split(' ');
        let value = event.target.getAttribute('data-key');
        let stringValue = '';
        console.log(modelValues)
        if(modelValues.includes(value)) {
            modelValues.splice(modelValues.indexOf(value), 1);
            event.target.classList.remove('active-checkbox');
            stringValue = modelValues.join(' ').trim();
            modelTag.setAttribute('value', stringValue);
        } else {
            modelValues.push(value);
            event.target.classList.add('active-checkbox');
            stringValue = modelValues.join(' ').trim();
            modelTag.setAttribute('value', stringValue);
        }
    })
}