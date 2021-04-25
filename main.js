/*eslint-env browser*/
var j = 0;


var k = 0;
var words = ["robotics.","engineering.","programming.","chess.","video editing.","competitive.","self-motivated.","leadership.","self-taught.","perseverant.","passionate.","Henry Xiu."]








//"cout << \"Hello World!\" << endl;"


// function helloWorldAnimation(){

// 	document.getElementById("helloworld").innerHTML = anim[j];
// 	j += 1;
	
// 	if (j == anim.length){
// 		j = 0
// 	}
	
// 	setTimeout(helloWorldAnimation, 150);
	
	
// }

function wordsAnimation(){
	
	document.getElementById("words-anim").innerHTML = words[k];
	k += 1
	
	if (k == words.length){
		return
	}else{
		setTimeout(wordsAnimation, 1000-(k*60));
	}
}


var played = false;
window.addEventListener('scroll', function() {
	if (window.pageYOffset > 800 && played == false){
		
		setTimeout(wordsAnimation, 1000);
		played = true;
	}
});


