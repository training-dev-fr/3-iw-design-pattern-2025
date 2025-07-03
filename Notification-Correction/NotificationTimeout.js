export default class NotificationTimeout{
    constructor(time,message){
        this.message = message;
        setTimeout(() => {
            this.message.close();
        },time)
    }
}