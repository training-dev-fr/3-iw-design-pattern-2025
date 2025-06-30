import List from './List.js';
import Item from './Item.js';

let item3 = new Item("4",null);
let item2 = new Item("2",item3);
let item1 = new Item("1",item2);

let list = new List([item1,item2,item3]);

console.log(list.currentItem);
list.next();
console.log(list.currentItem);