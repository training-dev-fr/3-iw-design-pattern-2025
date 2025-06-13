let array = [1,2,3,4,5];  

// let i = 0;
// while(array.length > i){
//     console.log(array[i++]);
// }

// for(let i = 0; i< array.length;i++){
//     console.log(array[i]);
// }

// function loop(array, i){
//     if(i >= array.length){
//         return;
//     }
//     console.log(array[i]);
//     loop(array, i+1);
// }

//loop(array,0);

// let i = 0;
// do{
//     console.log(array[i++]);
// }while(array.length > i)

// for(let index in array){
//     console.log(array[index]);
// }

// for(let element of array){
//     console.log(element);
// }

// array.forEach(element => {
//     console.log(element);
// })

Array.prototype.forEach2 = function(callback) {
    for(let element of this) {
        callback(element);
    }
}

array.forEach2(element => {
    console.log(element)
});

// console.log(array);