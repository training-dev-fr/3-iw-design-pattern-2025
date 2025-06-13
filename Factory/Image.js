export default class Image{
    constructor(item){
        this.src = item.url;
    }

    displayDiapo(){
        return `<div class="slide">
            <img src="${this.src}" />
        </div>`;
    }
}