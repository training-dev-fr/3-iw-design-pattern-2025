class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

const instance = new Singleton();
Object.freeze(instance);

export default instance;