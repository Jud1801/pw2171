function texto(){
	alert(document.getElementById("texto1").value)
}

function suma(a,b){
	return a+b;
}

var suma2 = function(a,b){
	return a+b;
}

function suma3(){
	var n1 = document.getElementById("num1").value
	var n2 = document.getElementById("num2").value

	alert(parseInt(n1)+parseInt(n2));
}