import DAB from "./DAB.js";

export default class Banque{
    constructor(){
        this.DABList = [new DAB("Lille")];
        this.DABList.push(new DAB("Five"));
        for(let dab of this.DABList){
            dab.addEventListener("withdraw",this.removeMoneyFromAccount);
            dab.addEventListener("deposite",this.addMoneyFromAccount);
        }

    }

    removeMoneyFromAccount(e){
        console.log("we have remove " + e.amount + " from the account on DAB " + e.name);
    }

    addMoneyFromAccount(e){
        console.log("we have add " + e.amount + " from the account on DAB " + e.name);
    }
}