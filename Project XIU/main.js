/*eslint-env browser*/
var j = 0;
var anim = ['p_', 'pr_', 'pri_', 'prin_', 'print_', 'print(_', 'print("_', 'print("H_', 'print("He_', 'print("Hel_', 'print("Hell_', 'print("Hello_', 'print("Hello _', 'print("Hello W_', 'print("Hello Wo_', 'print("Hello Wor_', 'print("Hello Worl_', 'print("Hello World_', 'print("Hello World!_', 'print("Hello World!"_', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'S_', 'Sy_', 'Sys_', 'Syst_', 'Syste_', 'System_', 'System._', 'System.o_', 'System.ou_', 'System.out_', 'System.out._', 'System.out.p_', 'System.out.pr_', 'System.out.pri_', 'System.out.prin_', 'System.out.print_', 'System.out.printl_', 'System.out.println_', 'System.out.println(_', 'System.out.println("_', 'System.out.println("H_', 'System.out.println("He_', 'System.out.println("Hel_', 'System.out.println("Hell_', 'System.out.println("Hello_', 'System.out.println("Hello _', 'System.out.println("Hello W_', 'System.out.println("Hello Wo_', 'System.out.println("Hello Wor_', 'System.out.println("Hello Worl_', 'System.out.println("Hello World_', 'System.out.println("Hello World!_', 'System.out.println("Hello World!"_', 'System.out.println("Hello World!")_', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'c_', 'co_', 'cou_', 'cout_', 'cout _', 'cout <_', 'cout <<_', 'cout << _', 'cout << "_', 'cout << "H_', 'cout << "He_', 'cout << "Hel_', 'cout << "Hell_', 'cout << "Hello_', 'cout << "Hello _', 'cout << "Hello W_', 'cout << "Hello Wo_', 'cout << "Hello Wor_', 'cout << "Hello Worl_', 'cout << "Hello World_', 'cout << "Hello World!_', 'cout << "Hello World!"_', 'cout << "Hello World!" _', 'cout << "Hello World!" <_', 'cout << "Hello World!" <<_', 'cout << "Hello World!" << _', 'cout << "Hello World!" << e_', 'cout << "Hello World!" << en_', 'cout << "Hello World!" << end_', 'cout << "Hello World!" << endl_', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_']


var k = 0;
var words = ["robotics.","engineering.","programming.","chess.","video editing.","competitive.","self-motivated.","leadership.","self-taught.","perseverant.","passionate.","Henry Xiu."]








//"cout << \"Hello World!\" << endl;"


function helloWorldAnimation(){

	document.getElementById("helloworld").innerHTML = anim[j];
	j += 1;
	
	if (j == anim.length){
		j = 0
	}
	
	setTimeout(helloWorldAnimation, 150);
	
	
}

function wordsAnimation(){
	
	document.getElementById("fastwords").innerHTML = words[k];
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

helloWorldAnimation();

