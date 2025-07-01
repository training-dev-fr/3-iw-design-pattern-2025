import Banque from "./Banque.js";

let banque = new Banque();


document.querySelectorAll('.withdraw').forEach(btn => btn.addEventListener('click', (e) => {
    banque.DABList.find(dab => dab.name === e.target.dataset.name).withdraw(250)
}));
document.querySelectorAll('.deposite').forEach(btn => btn.addEventListener('click', (e) => {
    banque.DABList.find(dab => dab.name === e.target.dataset.name).deposite(100)
}));