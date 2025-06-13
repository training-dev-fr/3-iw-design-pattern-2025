import Image from "./Image.js";
import Video from "./Video.js";

export default class DiapoFactory{
    constructor(item){
        if(item.type === 'image'){
            return new Image(item);
        }
        if(item.type === 'video'){
            return new Video(item);
        }
    }
}