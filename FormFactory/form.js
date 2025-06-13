import FormFactory from "./FormFactory.js";

window.myData = {}

async function loadData() {
    let result = await fetch('./dataset.json');
    let data = await result.json();
    return data;
}

function showFormField(element) {
    if (element.display) {
        document.querySelector('.form').appendChild(element.display());
    }
}

async function init() {
    let data = await loadData();

    for (let element of data) {
        let object = new FormFactory(element);
        showFormField(object);
        object.onChange((value,element) => {
            window.myData[element.name] = value;
        });
    }
}

init();