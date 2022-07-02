let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons) {
    item.addEventListener('click', (event) => {
        buttonText = event.target.innerText;

        if (buttonText == 'AC') {
            screenValue = '';
            screen.value = screenValue;
        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);
            screenValue = screen.value;
        }

        else if (buttonText == 'C') {
            screenValue = screen.value.substr(0, screen.value.length - 1);
            screen.value = screenValue;
        }

        else if (buttonText == 'sqrt') {
            screenValue = Math.sqrt(screen.value);
            screen.value = screenValue;
        }

        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}