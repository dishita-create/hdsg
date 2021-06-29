class Quiz {
  constructor(){
   // this.greeting = createElement('h3');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
     
      //question.display();
      question = new Question()
      question.display();
      contestant = new Contestant();
      contestant.getCount();
      
      
    } 
  }
 
 
  play(){
    //write code here to hide question elements
    
    //write code to change the background color here
 
    //write code to show a heading for showing the result of Quiz
    
   contestant.getPlayerInfo()
   
  
    //call getContestantInfo( ) here
   
    //contestantCount.getContestantInfo( )
  //write condition to check if contestantInfor is not undefined
    //write code to add a note here
if(allContestants !== undefined){
  fill("blue")
  textSize(20)
  text("*NOTE: Contestant who answered correct are highlighted in Green Color!",130,230)
 
}

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns="2"
      if(correctAns===allContestants[plr].answer){
        fill("green")
      }else{
        fill("red")
      }
    }
    
  }
 

}
