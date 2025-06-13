export default class Select {
    constructor(item) {
        this.name = item.name;
        this.id = item.id;
        this.label = item.label;
        this.options = item.options;
    }

    display() {
        return `
        <div class="form-group">
            <label for="${this.id}">${this.label}</label>
            <select name="${this.name}" id="${this.id}">
                ${Object.entries(this.options).map(([key,value]) => {
                    return `<option value="${key}">${value}</option>`;
                }).join("")}
            </select>
        </div>
        `
    }
}