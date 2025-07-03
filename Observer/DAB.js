export default class DAB {
    constructor(name) {
        this.name = name;
        this.callbackList = [];
    }

    withdraw(amount) {
        for (let event of this.callbackList.filter(event => event.event === "withdraw")) {
            event.callback({amount: amount, name: this.name});
        }
        return amount;
    }

    deposite(amount) {
        for (let event of this.callbackList.filter(event => event.event === "deposite")) {
            event.callback({amount: amount, name: this.name});
        }
        return amount;
    }

    addEventListener(event, callback) {
        this.callbackList.push({ event: event, callback: callback });
    }
}