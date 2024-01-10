'use strict';

let highScore=0;

function play(){
    const target=Number.parseInt(Math.random()*21);
    let score=20;
    
    document.querySelector("span.score").textContent=score;
    document.querySelector("p.message").textContent="Start guessing...";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector("input.guess").value="";
    
    function check(){
        const input=Number.parseInt(document.querySelector("input.guess").value);

        if(input>target){
            score--;
            document.querySelector("span.score").textContent=score;
            document.querySelector("p.message").textContent="📈 Too high!";
        }
        else if(input<target){
            score--;
            document.querySelector("span.score").textContent=score;
            document.querySelector("p.message").textContent="📉 Too low!";
        }
        else{
            highScore=score;
            document.querySelector("span.highscore").textContent=score;
            document.querySelector("p.message").textContent="🎉 Correct Number!";
            document.querySelector("body").style.backgroundColor="#60b347";
            document.querySelector(".btn.check").removeEventListener("click",check);
        }

        if(score===0){            
            document.querySelector("p.message").textContent="💥 You lost the game!";
            document.querySelector(".btn.check").removeEventListener("click",check);
        }
    }
    document.querySelector(".btn.check").addEventListener("click",check);
    
}
document.querySelector(".btn.again").addEventListener("click",play);

play();