export default class DAB{
    constructor(){
       this.callbackList = []; 
    }

    withdraw(amount){
        for(let event of this.callbackList.filter(event => event.event === "withdraw")){
            event.callback(amount);
        }
        return amount;
    }

    deposite(amount){
        for(let event of this.callbackList.filter(event => event.event === "deposite")){
            event.callback(amount);
        }
        return amount;
    }

    addEventListener(event,callback){
        this.callbackList.push({event: event,callback: callback});
    }
}