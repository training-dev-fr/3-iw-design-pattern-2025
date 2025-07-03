class NotificationObserver{
    constructor(){
        if(!NotificationObserver.instance){
            NotificationObserver.instance = this;
        }
        NotificationObserver.instance.callbackList = [];
        return NotificationObserver.instance;
    }

    addListener(callback){
        this.callbackList.push(callback);
    }

    emit(message){
        for(let callback of this.callbackList){
            callback(message);
        }
    }
}

const instance = new NotificationObserver();
Object.freeze(instance);
export default instance;