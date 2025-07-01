import DAB from "./DAB.js";

export default class Banque{
    constructor(){
        this.DAB = new DAB();
        this.DAB.addEventListener("withdraw",this.removeMoneyFromAccount);
        this.DAB.addEventListener("deposite",this.addMoneyFromAccount);
    }

    removeMoneyFromAccount(amount){
        console.log("we have remove " + amount + " from the account");
    }

    addMoneyFromAccount(amount){
        console.log("we have add " + amount + " from the account");
    }
}