


var database;
var form  

var voterCount = 0;

function setup(){
    database = firebase.database();
    console.log(database)
    createCanvas(displayWidth,displayHeight);
        form = new Form();
        form.display();
        voter = new Voter();


}


