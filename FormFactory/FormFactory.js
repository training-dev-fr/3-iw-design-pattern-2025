import Input from "./FactoryItem/Input.js";
import Radio from "./FactoryItem/Radio.js";
import Select from "./FactoryItem/Select.js";

export default class FormFactory {
    constructor(item) {
        switch (item.type) {
            case "text":
            case "email":
            case "password":
                return new Input(item);
            case "select":
                return new Select(item);
            case "radio":
                case "checkbox":
                return new Radio(item);
            default:
                return null;
        }
    }
}