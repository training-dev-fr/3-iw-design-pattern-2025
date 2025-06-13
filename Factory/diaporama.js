import DiapoFactory from "./diapoFactory.js";

async function loadData(){
    let result = await fetch('./content.json');
    let data = await result.json();
    return data;
}

let currentIndex = 0;

function showDiaporama(data,index){
    let element = new DiapoFactory(data[index]);
    document.querySelector(".diaporama").innerHTML = element.displayDiapo();
}

document.querySelector('#prev').addEventListener('click',() => {
    showDiaporama(data,--currentIndex)
});
document.querySelector('#next').addEventListener('click',() => {
    showDiaporama(data,++currentIndex)
});

let data = null;

async function init(){
    data = await loadData();
    showDiaporama(data,currentIndex);
}

init();