/*eslint-env browser*/
var j = 0;

var arr = ['p_', 'pr_', 'pri_', 'prin_', 'print_', 'print(_', 'print("_', 'print("H_', 'print("He_', 'print("Hel_', 'print("Hell_', 'print("Hello_', 'print("Hello _', 'print("Hello W_', 'print("Hello Wo_', 'print("Hello Wor_', 'print("Hello Worl_', 'print("Hello World_', 'print("Hello World!_', 'print("Hello World!"_', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'print("Hello World!")', 'print("Hello World!")_', 'S_', 'Sy_', 'Sys_', 'Syst_', 'Syste_', 'System_', 'System._', 'System.o_', 'System.ou_', 'System.out_', 'System.out._', 'System.out.p_', 'System.out.pr_', 'System.out.pri_', 'System.out.prin_', 'System.out.print_', 'System.out.printl_', 'System.out.println_', 'System.out.println(_', 'System.out.println("_', 'System.out.println("H_', 'System.out.println("He_', 'System.out.println("Hel_', 'System.out.println("Hell_', 'System.out.println("Hello_', 'System.out.println("Hello _', 'System.out.println("Hello W_', 'System.out.println("Hello Wo_', 'System.out.println("Hello Wor_', 'System.out.println("Hello Worl_', 'System.out.println("Hello World_', 'System.out.println("Hello World!_', 'System.out.println("Hello World!"_', 'System.out.println("Hello World!")_', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'System.out.println("Hello World!");', 'System.out.println("Hello World!");_', 'c_', 'co_', 'cou_', 'cout_', 'cout _', 'cout <_', 'cout <<_', 'cout << _', 'cout << "_', 'cout << "H_', 'cout << "He_', 'cout << "Hel_', 'cout << "Hell_', 'cout << "Hello_', 'cout << "Hello _', 'cout << "Hello W_', 'cout << "Hello Wo_', 'cout << "Hello Wor_', 'cout << "Hello Worl_', 'cout << "Hello World_', 'cout << "Hello World!_', 'cout << "Hello World!"_', 'cout << "Hello World!" _', 'cout << "Hello World!" <_', 'cout << "Hello World!" <<_', 'cout << "Hello World!" << _', 'cout << "Hello World!" << e_', 'cout << "Hello World!" << en_', 'cout << "Hello World!" << end_', 'cout << "Hello World!" << endl_', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_', 'cout << "Hello World!" << endl;', 'cout << "Hello World!" << endl;_']














//"cout << \"Hello World!\" << endl;"

document.getElementById("name").innerHTML = "Henry Xiu";


function playAnimation(){

	document.getElementById("helloworld").innerHTML = arr[j];
	j += 1;
	
	if (j == arr.length){
		j = 0
	}
	
	setTimeout(playAnimation, 150);
	
	
}

playAnimation();

