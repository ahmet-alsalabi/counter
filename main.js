
let counter = 0;

document.getElementById('counter').textContent = counter;

function addNum() {
    counter++;
    document.getElementById('counter').textContent = counter;
}

function subNum() {
    counter--;
    document.getElementById('counter').textContent = counter;
}
