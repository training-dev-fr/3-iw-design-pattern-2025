class Multiton{
    constructor(){
        if(!Multiton.listInstance){
            Multiton.listInstance = [this];
        }else if(Multiton.listInstance.length < 6){
            Multiton.listInstance.push(this);
        }
        return Multiton.listInstance;
    }
}

export default Multiton;