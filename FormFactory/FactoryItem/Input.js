export default class Input {
    constructor(item) {
        this.type = item.type;
        this.name = item.name;
        this.id = item.id;
        this.label = item.label;
    }

    display() {
        return `<div class="form-group">
            <label for="${this.id}">${this.label}</label>
            <input type="${this.type}" name="${this.name}" id="${this.id}" />
        </div>`;
    }
}