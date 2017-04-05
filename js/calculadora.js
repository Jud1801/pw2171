
//Varible GLOBAL :D
var operador="";
var valor1;

function borrar(){
	operador = "";
	document.calculadora.op.value = 0;
	//document.calculadora.op1.value = 0;
	//document.calculadora.op2.value = 0;
	//document.calculadora.res.value = 0;
}

function igual(){
	//var valor1 = document.calculadora.op1.value;
	//var valor2 = document.calculadora.op2.value;
	var valor2 = document.calculadora.op.value;
	//document.calculadora.res.value = eval(valor1+operador+valor2);
	document.calculadora.op.value = eval(valor1+operador+valor2);
	operador = "";
}

function operadores(ope){
	operador = ope
	valor1 =  document.calculadora.op.value;
	document.calculadora.op.value = 0;
}

function numeros(num){
	if(operador == ""){ //Escribir en el operando1 
		//var valorInicial = document.calculadora.op1.value
		var valorInicial = document.calculadora.op.value
		
		if(valorInicial=="0"){
			//Elimino el cero
			//document.calculadora.op1.value = "";
			document.calculadora.op.value = "";
		}

		//Concatena los valores de num con los del operando1
		//document.calculadora.op1.value =
		//document.calculadora.op1.value + num
		
		document.calculadora.op.value =
		document.calculadora.op.value + num
		
	}else{ //Escribo en el operando2
		//var valorInicial = document.calculadora.op2.value
		var valorInicial = document.calculadora.op.value

		if(valorInicial=="0"){
			//Elimino el cero
			//document.calculadora.op2.value = "";
			document.calculadora.op.value = "";
		}

		//Concatena los valores de num con los del operando1
		//document.calculadora.op2.value =
		//document.calculadora.op2.value + num
		
		document.calculadora.op.value =
		document.calculadora.op.value + num
	}
}

// TAREA!! SOLO UN CUADRO DE TEXTO

