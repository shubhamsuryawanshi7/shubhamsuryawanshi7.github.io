//chalenge.css\\



var scores, roundScore,activePlayer;

init();

//console.log(dice);
//document.querySelector('#current-' + activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);

document.querySelector('.dice').style.display ='none';
//document.querySelector('.dice-2').style.display ='none';
document.querySelector('.btn-roll').addEventListener('click', function(){
	var dice=Math.floor(Math.random()*6)+1;
	
	var diceDOM =	document.querySelector('.dice');
	
     diceDOM.style.display ='block';
	 diceDOM.src ='dice-'+dice+ '.png';
	 //console.log(diceDOM.src);
	if (dice !== 1){
		roundScore += dice;
		document.querySelector('#current-'+activePlayer).textContent =roundScore;	
	}
	else{
	nextPlayer();
		
		
	}

});


document.querySelector('.btn-hold').addEventListener('click',function(){
	
	scores[activePlayer]+= roundScore;
	
	
	document.querySelector('#score-' +activePlayer).textContent =scores[activePlayer];
	
	if(scores[activePlayer] >= 20){
		document.querySelector('#name-' +activePlayer).textContent = "Winner";
		document.querySelector('.dice').style.display ='none';
	}
	else{	
	nextPlayer();
	}
});

function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1: activePlayer =0;
		roundScore = 0;
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		
		//document.querySelector('.player-0-panel').classList.remove('active');
		//document.querySelector('.player-1-panel').classList.add('active');
		
		document.querySelector('.dice').style.display = 'none';
	
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
scores =[0,0];
roundScore=0;
activePlayer=0;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

	document.querySelector('#name-0').textContent = "Player 1";
	document.querySelector('#name-1').textContent = "Player 2";

}






































