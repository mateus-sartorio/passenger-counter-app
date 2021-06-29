let saveEl = document.getElementById('save-el');
let countEl = document.getElementById('count-el');
let count = 0;

let increment = () => {
    count++;
    countEl.textContent = count;
}

let decrement = () => {
    if(count > 0) {
        count--;
        countEl.textContent = count;
    }
}

let save = () => {
    saveEl.textContent += count + ' - ';
    countEl.textContent = count = 0;
}