import notificationObserver from "./NotificationObserver.js";

class LogManager{
    constructor(notificationObserver){
        if(!LogManager.instance){
            LogManager.instance = this;
        }
        notificationObserver.addListener('danger',(message) => this.log(message))
        return LogManager.instance;
    }

    log(message){
        console.log(message);
    }
}
const instance = new LogManager(notificationObserver);
Object.freeze(instance);

export default instance;