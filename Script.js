const calculatorScreen = document.getElementById('calculator-screen');
const keys = document.querySelector('.calculator-keys');

keys.addEventListener('click', event => {
    const { target } = event;
    const { value } = target;
    if (!target.matches('button')) {
        return;
    } else {
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
            case '.':
                calculatorScreen.value += value;
                break;
            case '=':
                try {
                    calculatorScreen.value = eval(calculatorScreen.value);
                } catch {
                    calculatorScreen.value = 'Error';
                }
                break;
            case 'all-clear':
                calculatorScreen.value = '';
                break;
            default:
                calculatorScreen.value += value;
                break;
        }
    }
});