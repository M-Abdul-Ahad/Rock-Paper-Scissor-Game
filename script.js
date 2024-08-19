let score=JSON.parse(localStorage.getItem('score')) || {wins:0,loses:0,ties:0};
    updateScore();
    function play(pick){
      let result='';
      let randomNumber=Math.random();
      let computerPick='';
      if(randomNumber<(1/3)){computerPick='rock';}
      else if(randomNumber>=(1/3) && randomNumber<(2/3)){computerPick='paper';}
      else{computerPick='scissor';}
      //for rock
      if(pick==='rock'){
        if(computerPick==='rock'){result='Tie';}
        else if(computerPick==='paper'){result='you lose';}
        else{result='you win';}
      }
      //for paper
      if(pick==='paper'){
        if(computerPick==='rock'){result='you win';}
        else if(computerPick==='paper'){result='tie';}
        else{result='you lose';}
      }
      //for scissor
      if(pick==='scissor'){
        if(computerPick==='rock'){result='you lose';}
        else if(computerPick==='paper'){result='you win';}
        else{result='tie';}
      }
      if(result==='you win'){score.wins=score.wins+1;
      }
      else if(result==='you lose'){score.loses=score.loses+1;
      }
      else{score.ties=score.ties+1;
      }
      localStorage.setItem('score',JSON.stringify(score));
      updateScore();
      document.querySelector('.js-result').innerHTML=`${result}`;
      document.querySelector('.js-turns').innerHTML=`You picked <img src="${pick}-emoji.png" alt="${pick}" class="move">,Computer picked <img src="${computerPick}-emoji.png" alt="${computerPick}" class="move">`;
    }
      function updateScore(){
        document.querySelector('.js-score').innerHTML=`wins:${score.wins}, loses:${score.loses}, ties:${score.ties}`;
      }
   
   