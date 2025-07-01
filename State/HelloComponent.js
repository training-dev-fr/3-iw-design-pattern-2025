export default class HelloComponent{
    constructor({name}){
        this.name = name;
        this.content = document.createElement('div');
    }


    render(){
        this.content.innerHTML = 'Bonjour ' + this.name;
    }

    setName(value){
        this.name = value;
        this.render();
    }
}