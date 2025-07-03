import Message from "./Message.js";
import notificationObserver from "./NotificationObserver.js";

class NotificationManager {
    constructor(notificationObserver) {
        if (!NotificationManager.instance) {
            NotificationManager.instance = this;
        }
        this.pool = [];
        this.notificationObserver = notificationObserver;
        this.notificationObserver.addListener('info', (message) => this.showNotification(message));
        this.notificationObserver.addListener('warning', (message) => this.showNotification(message));
        this.notificationObserver.addListener('danger', (message) => this.showNotification(message));
        this.createNotificationBloc();
        return NotificationManager.instance;
    }

    createNotificationBloc() {
        this.notificationBloc = document.createElement('div');
        this.notificationBloc.classList.add('notification-bloc');
        document.querySelector('body').appendChild(this.notificationBloc);
    }

    showNotification(event) {
        if (this.notificationBloc.querySelectorAll('.notification').length < 3) {
            let notification = new Message(event.type, event.message);
            notification.addCloseListener(() => this.shiftPool());
            this.notificationBloc.appendChild(notification.build());
        }else{
            this.pool.push(event);
        }
    }

    shiftPool(){
        if(this.pool.length > 0){
            this.showNotification(this.pool.shift());
        }
    }
}

const instance = new NotificationManager(notificationObserver);
Object.freeze(instance);

export default instance;