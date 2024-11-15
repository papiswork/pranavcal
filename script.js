let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function addNumber(num) {
    if (display.innerText === '0') display.innerText = '';
    display.innerText += num;
}

function addOperation(op) {
    const lastChar = display.innerText.slice(-1);
    if ("+-*/%".includes(lastChar)) return;
    display.innerText += op;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('÷', '/').replace('×', '*'));
    } catch {
        display.innerText = 'Error';
    }
}
