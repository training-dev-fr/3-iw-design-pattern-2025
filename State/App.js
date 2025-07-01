import HelloComponent from "./HelloComponent.js";

let helloComponent = new HelloComponent({name: "Aurélien"});
helloComponent.render();
document.querySelector('body').appendChild(helloComponent.content);

helloComponent.setName('Jean');