export default class NotificationButton{
    constructor(message){
        this.message = message;
    }

    build(){
        this.element = document.createElement('button');
        this.element.classList.add('close-btn');
        this.element.addEventListener('click',() => {this.message.close();});
        return this.element;
    }
}