import Input from "./FactoryItem/Input.js";

export default class FormFactory {
    constructor(item) {
        switch (item.type) {
            case "text":
            case "email":
            case "password":
                return new Input(item);
            default:
                return null;
        }
    }
}