export default class Video{
    constructor(item){
        this.src = item.url;
    }

    displayDiapo(){
        return `<div class="slide">
            <video src="${this.src}" />
        </div>`;
    }
}