import Input from "./FactoryItem/Input.js";
import Radio from "./FactoryItem/Radio.js";
import Select from "./FactoryItem/Select.js";

export default class AbstractFactory {
    constructor(item) {
       
    }

    static getTextForm(item){
        return Input.getForm();
    }
}