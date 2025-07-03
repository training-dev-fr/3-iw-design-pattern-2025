import {notificationObserver} from "./NotificationManager.js";


document.querySelector('.notif').addEventListener('click',() => {
    notificationObserver.emit("Test de notification");
})