import DAB from "./DAB.js";

export default class Banque{
    constructor(){
        this.DABList = [new DAB("Lille")];
        this.DABList.push(new DAB("Five"));
        this.DAB.addEventListener("withdraw",this.removeMoneyFromAccount);
        this.DAB.addEventListener("deposite",this.addMoneyFromAccount);
    }

    removeMoneyFromAccount(e){
        console.log("we have remove " + e.amount + " from the account on DAB " + e.name);
    }

    addMoneyFromAccount(e){
        console.log("we have add " + e.amount + " from the account on DAB " + e.name);
    }
}