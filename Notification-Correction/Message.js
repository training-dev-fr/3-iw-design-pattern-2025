import NotificationButton from "./NotificationButton.js";
import NotificationTimeout from "./NotificationTimeout.js";

export default class Message{
    constructor(type, message){
        this.type = type;
        this.message = message;
        this.callbackCloseList = [];
    }

    build(){
        this.element = document.createElement('div');
        this.element.classList.add('notification');
        this.element.classList.add(this.type);
        this.element.innerHTML = this.message;
        let notificationButton = new NotificationButton(this);
        this.element.appendChild(notificationButton.build());
        new NotificationTimeout(3000,this);
        return this.element;
    }

    close(){
        this.element.remove();
        for(let callback of this.callbackCloseList){
            callback();
        }
    }

    addCloseListener(callback){
        this.callbackCloseList.push(callback);
    }
}