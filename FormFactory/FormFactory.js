import Input from "./FactoryItem/Input.js";

export default class FormFactory{
    constructor(item){
        switch(item.type){
            case "text":
                return new Input(item);
            default: 
                return null;
        }
    }
}