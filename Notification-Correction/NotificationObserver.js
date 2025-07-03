class NotificationObserver{
    constructor(){
        if(!NotificationObserver.instance){
            NotificationObserver.instance = this;
        }
        NotificationObserver.instance.callbackList = [];
        return NotificationObserver.instance;
    }

    addListener(type,callback){
        NotificationObserver.instance.callbackList.push({type,callback});
    }

    emit(type,message){
        for(let callback of this.callbackList.filter(c => c.type === type)){
            callback.callback({type,message});
        }
    }
}

const instance = new NotificationObserver();
Object.freeze(instance);
export default instance;