class File{
    constructor(){
        this.list = [];
    }

    push(element){
        this.list.push(element);
    }

    pull(){
        return this.list.shift();
    }
}

class Pile{
    constructor(){
        this.list = [];
    }

    push(element){
        this.list.push(element);
    }

    pull(){
        return this.list.pop();
    }
}