import DAB from "./DAB.js";

export default class Banque{
    constructor(){
        this.DAB = new DAB();
    }

    removeMoneyFromAccount(amount){
        console.log("we have remove " + amount + " from the account");
    }
}