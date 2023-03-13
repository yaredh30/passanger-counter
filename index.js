let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    addsub()
}

function decrement() {
    count--
    countEl.textContent = count
    addsub()
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
    addsub()
}

function addsub() {
    if(count >= 1) {
        countEl.style.color = 'green'
    } else if(count <= -1 ) {
        countEl.style.color = 'red'
    } else if(count === 0) {
        countEl.style.color = 'black'
    }
}
