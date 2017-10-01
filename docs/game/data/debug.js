class debug{
    constructor(){
        this.reseed(42);
    }
    reseed(newSeed){
        this.seed = newSeed;
        window.chance = new Chance(this.seed);
    }
    generateBattle(arrayRounds,arrayPC){
        let battle = {};
        battle.roundCurrent = 1;
        battle.roundMax = arrayRounds.length;
        battle.rounds = arrayRounds;
        
        return battle;
    }
    generateRound(environment,){

    }
    generatePC(){

    }
    generateNPC(){

    }
}
const d = new debug();
