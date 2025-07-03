import notificationObserver from "./Notification.js";

document.querySelectorAll('.test').forEach(btn => btn.addEventListener('click',(e) => {
    notificationObserver.emit(e.target.dataset.type, "Test de notification");
}));