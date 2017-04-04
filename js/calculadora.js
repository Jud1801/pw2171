
//Varible GLOBAL :D
var operador="";

function borrar(){
	operador = "";
	document.calculadora.op1.value = 0;
	document.calculadora.op2.value = 0;
	document.calculadora.res.value = 0;
}

function igual(){
	var valor1 = document.calculadora.op1.value;
	var valor2 = document.calculadora.op2.value;

	document.calculadora.res.value = eval(valor1+operador+valor2);

}

function operadores(ope){
	operador = ope
}

function numeros(num){
	if(operador == ""){ //Escribir en el operando1 
		var valorInicial = document.calculadora.op1.value

		if(valorInicial=="0"){
			//Elimino el cero
			document.calculadora.op1.value = "";
		}

		//Concatena los valores de num con los del operando1
		document.calculadora.op1.value =
		document.calculadora.op1.value + num
	}else{ //Escribo en el operando2
		var valorInicial = document.calculadora.op2.value

		if(valorInicial=="0"){
			//Elimino el cero
			document.calculadora.op2.value = "";
		}

		//Concatena los valores de num con los del operando1
		document.calculadora.op2.value =
		document.calculadora.op2.value + num
	}
}

// TAREA!! SOLO UN CUADRO DE TEXTO

