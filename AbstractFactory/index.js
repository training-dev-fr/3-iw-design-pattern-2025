import AbstractFactory from "./AbstractFactory.js";

document.querySelector('#add-field').addEventListener('click',() => {
    document.querySelector('.modal').classList.add('show');
});

document.querySelector('.modal .content .close').addEventListener('click',() => {
    document.querySelector('.modal').classList.remove('show');
});

document.querySelector('.field-type').addEventListener('change',() => {
    document.querySelector('.modal .content .field-form').innerHTML += AbstractFactory.getTextForm();
})

document.querySelector('valid-field').addEventListener('click',()=>{
    document.querySelector('.modal').classList.remove('show');
    let element = document.querySelector('.field-type').value;

});