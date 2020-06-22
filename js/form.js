class Form {
constructor(){
   this.input = createInput("your mail");
   this.input2 = createInput("your donations")


   this.radio1 = createRadio('yes');
   this.radio1.option('yes');
   this.radio1.option('no')


   this.radio2 = createRadio('no')
   this.radio2.option('yes');
   this.radio2.option('no')

   
 this.Q1 =   createElement("h3","Do you think we need to add free meals to poor children ?");

 this.Q2 =  createElement("h3","Will you contribute to this idea ?")

 this.Q3 =   createElement("h3","How much would you contribute ?")




  
 

    this.button = createButton('Submit')

   this.greeting = createElement('h4');

}
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();

}
display(){
    var title = createElement('h1')
    title.html("THE SOCIAL FORM");
    title.position(displayWidth/2,100);


this.input2.position(600,500)

    
this.input.position(600,700);

this.radio1.position(600,200);
   
this.radio2.position(600,300);

this.Q1.position(100,200);
this.Q2.position(100,300);
this.Q3.position(100,500);
   
   


    this.button.mousePressed(()=>{


        voter.input = this.input.value();
        voterCount += 1;
        voter.index = voterCount;
        voter.update();
        voter.updateCount(voterCount);
       


    });
}

}