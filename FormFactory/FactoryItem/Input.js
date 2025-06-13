export default class Input {
    constructor(item) {
        this.type = item.type;
        this.name = item.name;
        this.id = item.id;
        this.label = item.label;
    }

    display() {
        let formGroup = document.createElement("div");
        formGroup.classList.add('form-group');

        let label = document.createElement('label');
        label.for = this.id;
        label.innerHTML = this.label;

        formGroup.appendChild(label);

        this.input = document.createElement('input');
        this.input.type = this.type;
        this.input.name= this.name;
        this.input.id = this.id;

        formGroup.appendChild(this.input);

        return formGroup;
        // return `<div class="form-group">
        //     <label for="${this.id}">${this.label}</label>
        //     <input type="${this.type}" name="${this.name}" id="${this.id}" />
        // </div>`;
    }

    onChange(callback){
        this.input.addEventListener('keyup',function(e){
            callback(e.target.value,this);
        })
    }
}