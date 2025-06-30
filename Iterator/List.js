export default class List{
    constructor(items){
        this.items = items;
        this.currentItem = this.items[0];
    }

    next(){
        if(this.currentItem && this.currentItem.next){
            this.currentItem = this.currentItem.next;
        }else{
            this.currentItem = null;
        }

    }
}