import Banque from "./Banque.js";

let banque = new Banque();


document.querySelector('#withdraw').addEventListener('click', () => {
    banque.DAB.withdraw(250)
});
document.querySelector('#deposite').addEventListener('click', () => {
    banque.DAB.deposite(100)
});