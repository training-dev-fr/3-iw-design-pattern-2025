class PokerManager{
    constructor(){
        if(!PokerManager.listTable){
            PokerManager.listTable = [{listPlayer: [this]}]
        }else if(PokerManager.listTable[PokerManager.listTable.length -1].listPlayer.length < 6){
            PokerManager.listTable[PokerManager.listTable.length -1].listPlayer.push(this);
        }else{
            PokerManager.listTable.push({listPlayer: [this]});
        }
        return PokerManager.listTable;
    }
}

let instance = new PokerManager();
new PokerManager();
new PokerManager();
new PokerManager();
new PokerManager();
new PokerManager();
new PokerManager();

console.log(instance);