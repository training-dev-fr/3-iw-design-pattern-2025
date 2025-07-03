import notificationObserver from "./NotificationObserver.js";

class NotificationManager{
    constructor(notificationObserver){
        if(!NotificationManager.instance){
            NotificationManager.instance = this;
        }
        this.notificationObserver = notificationObserver;
        this.notificationObserver.addListener((message) => this.showNotification(message));
        this.createNotificationBloc();
        return NotificationManager.instance;
    }

    createNotificationBloc(){
        this.notificationBloc = document.createElement('div');
        this.notificationBloc.classList.add('notification-bloc');
        document.querySelector('body').appendChild(this.notificationBloc);
    }

    showNotification(message){
        let notification = document.createElement('div');
        notification.classList.add('notification');
        notification.innerHTML = message;
        this.notificationBloc.appendChild(notification);
    }
}


const instance = new NotificationManager(notificationObserver);
Object.freeze(instance);

export default instance;
export {notificationObserver};