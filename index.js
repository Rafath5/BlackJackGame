
let cards=[];
let sum=0;
let hasBlackJack=false;
let isAlive=false;
let message="";



let player={
    name:"Rafath",
    chips:145,
    sayhello : function(){
        console.log("Herisann!");
    }
}
let playerEl=document.getElementById("player-el");
playerEl.textContent=player.name+": $"+player.chips;

let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");

function startGame(){
    isAlive=true;
    let firstCard=getRandomCard();
    let secondCard=getRandomCard();
    cards=[firstCard,secondCard];
    sum=firstCard+secondCard;
    renderGame();
}
function renderGame(){
    if (sum <= 20){
        message="Do you want to draw a new card?";
     }
     else if(sum===21){
        message="Wohoo! You've gor BlackJack!!!";
         hasBlackJack=true;
     }
     else {
         message="You are out of the game :(";
         isAlive=false;
     }
     messageEl.textContent=message;
     sumEl.textContent="Sum: "+sum;
     let ans="";
     for(let i=0;i<cards.length;i++){
        ans+=cards[i]+" ";
     }
     cardsEl.textContent="Cards: "+ans;

    }
    function newCard(){
        //so now the player can get a new card only if she
        //is alive and has not yet got blackjack
        if(isAlive===true && hasBlackJack===false){
        let third=getRandomCard();
        cards.push(third);
        sum=sum+third;
        renderGame();
        }
    
    }
    
    function getRandomCard(){
        let randomNumber=Math.floor(Math.random()*12)+1;
        if(randomNumber===1){
            return 11;
        }
        if(randomNumber>=11 && randomNumber<=13){
            return 10;
        }
        return randomNumber;
    }

    