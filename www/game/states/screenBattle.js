class screenBattle{
    constructor(engine){
        this.e = engine;  
    }
    preload(){
        
    }
    create(){
        if(d){ // DEBUG MODE
            localStorage.setItem("currentBattle",d.generateBattle());
        }
        // Get variables from localStorage

    }
    update(){
        
    }
}
