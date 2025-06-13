export default class Radio {
    constructor(item) {
        this.type = item.type;
        this.name = item.name;
        this.id = item.id;
        this.label = item.label;
        this.options = item.options;
    }

    display() {
        return `
        <div class="form-group">
            <label for="${this.id}">${this.label}</label>
            ${Object.entries(this.options).map(([key, value]) => {
            return `
            <div class="form-group">
                <label for="${key}">${value}</label>
                <input type="${this.type}" name="${this.name}[]" id="${key}" value="${key}" />
            </div>
                `;
        }).join("")
            }
       </div> `;
    }
}