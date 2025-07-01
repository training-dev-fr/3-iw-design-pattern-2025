import Banque from "./Banque.js";

let banque = new Banque();


document.querySelector('#withdraw').addEventListener('click', (e) => {
    banque.DAB.find(dab => dab.name === e.target.dataset.name).withdraw(250)
});
document.querySelector('#deposite').addEventListener('click', (e) => {
    banque.DAB.find(dab => dab.name === e.target.dataset.name).deposite(100)
});