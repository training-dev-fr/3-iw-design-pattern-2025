export default class Select {
    constructor(item) {
        this.name = item.name;
        this.id = item.id;
        this.label = item.label;
        this.options = item.options;
    }

    display() {
        let formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        let label = document.createElement('label');
        label.for = this.id;
        label.innerHTML = this.label;

        formGroup.appendChild(label);

        this.select = document.createElement('select');
        this.select.name = this.name;
        this.select.id = this.id;

        formGroup.appendChild(this.select);

        for(let [key,value] of Object.entries(this.options)){
            let option = document.createElement('option');
            option.value = key;
            option.innerHTML = value;
            this.select.appendChild(option);
        }

        return formGroup;
        // return `
        // <div class="form-group">
        //     <label for="${this.id}">${this.label}</label>
        //     <select name="${this.name}" id="${this.id}">
        //         ${Object.entries(this.options).map(([key, value]) => {
        //     return `<option value="${key}">${value}</option>`;
        // }).join("")}
        //     </select>
        // </div>
        // `
    }

    onChange(callback){
        this.select.addEventListener('change',(e)=> {
            callback(e.target.value, this)
        })
    }
}