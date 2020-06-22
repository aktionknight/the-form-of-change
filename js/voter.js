class Voter {
    constructor (){
    this.index = null;
  
    this.input = null;
    }
    
   
    
    
    updateCount(count){
        database.ref('/').update({
            VoterCount:count
        })
    }
    
    update(){
        var voterIndex = "voter"+ this.index;
        database.ref(voterIndex).set({
            
            input:this.input,
            answer :[]
        })


    }
    
  
    }
    
    
    
