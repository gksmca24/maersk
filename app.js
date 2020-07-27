createArr();
var arr;
function createArr() {
    arr = [];
    for(let i = 0; i < 9; i++ ) {
        let arrTemplate = `<div class="shufflebox box__${i + 1}">${i + 1}</div>`
        arr.push(arrTemplate);
    }
    
    gridWrapper.innerHTML = arr.join('');
}

const shuffleArry = () => {
    for(let i = arr.length; i > 0; i--){
        const j = Math.floor(Math.random() * i)
        const temp = arr[i]
        arr[i] = arr[j];
        arr[j] = temp;
    }
    let gridWrapper = document.getElementById('gridWrapper');
    gridWrapper.innerHTML = arr.join('');
}