export default class Fluent{
    querySelector(selector){
        this.element = document.querySelector(selector);
        return this;
    }

    setColor(color){
        this.element.style.color = color;
        return this;
    }

    setFontSize(size){
        this.element.style.fontSize = size;
        return this;
    }
}

let $ = (selector) => {
    let fluent = new Fluent();
    fluent.querySelector(selector);
    return fluent;
}

export {$};