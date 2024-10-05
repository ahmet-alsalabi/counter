
let counter = 0;

document.getElementById('counter').textContent = counter;

const addNum = () => {
    counter++;
    document.getElementById('counter').textContent = counter;
}

const subNum = () => {
    counter--;
    document.getElementById('counter').textContent = counter;
}
