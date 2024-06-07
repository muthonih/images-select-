document.addEventListener('DOMContentLoaded', function() {
    const playMethodDropdowns = document.querySelectorAll('.play-method');
    const submitButton = document.querySelector('#submit');
    const redoButton = document.querySelector('#redo');

    playMethodDropdowns.forEach(dropdown => {
        dropdown.addEventListener('change', validateSelection);
    });

    submitButton.addEventListener('click', validateAllSelections);
    redoButton.addEventListener('click', resetSelections);

    function validateSelection() {
        const selectedMethod = this.value;
        const correctMethod = this.parentElement.previousElementSibling.querySelector('.instrument').dataset.match;

        const validationSpan = this.parentElement.querySelector('.validation');
        if (selectedMethod === correctMethod) {
            validationSpan.classList.remove('incorrect');
            validationSpan.classList.add('correct');
        } else {
            validationSpan.classList.remove('correct');
            validationSpan.classList.add('incorrect');
        }
    }

    function validateAllSelections() {
        playMethodDropdowns.forEach(dropdown => {
            const selectedMethod = dropdown.value;
            const correctMethod = dropdown.parentElement.previousElementSibling.querySelector('.instrument').dataset.match;
            const validationSpan = dropdown.parentElement.querySelector('.validation');

            if (selectedMethod === correctMethod) {
                validationSpan.classList.remove('incorrect');
                validationSpan.classList.add('correct');
            } else {
                validationSpan.classList.remove('correct');
                validationSpan.classList.add('incorrect');
            }
        });
    }

    function resetSelections() {
        playMethodDropdowns.forEach(dropdown => {
            dropdown.value = '';
            const validationSpan = dropdown.parentElement.querySelector('.validation');
            validationSpan.classList.remove('correct', 'incorrect');
        });
    }
});
