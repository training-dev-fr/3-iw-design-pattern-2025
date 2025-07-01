export default function useState(value){
    let innerValue = value;
    let setter = function(value){
        this.innerValue = value;
    }
    return [innerValue,setter];
}