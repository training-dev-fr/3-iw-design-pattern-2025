export default class Button{
    constructor(){
        this.eventList = [];
    }
    render(){
        this.button = document.createElement('button');
    }

    click(){
        for(let event of this.eventList){
            event.callback();
        }
    }

    addEventListener(event,callback){
        this.eventList.push({event: event, callback: callback});
    }
}