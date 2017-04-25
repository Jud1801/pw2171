//Agrega al código (un enlace) al main.js (LO ENGAÑA D:!!)
// JSON = JavaScript Object Notation
// conjunto[0]
// conjunto:[ pos0
// 	llave:valor,
// 	llave2:valor,
// 	llave3 { llave4:valor, llave5:valor }
// ],
// [pos1], [pos2]
const rq 	= require('electron-require');
const main 	= rq.remote('./main.js');
const $ 	= require("jquery");

function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) { //caso de EXITO
	    // console.log(data); si es un input a lo que refiere, se usa ".val"
	    $("#txtNombre").html(data.results[0].name.first +" "+ 
	    					 data.results[0].name.last) //hace referencia a una seccion este caso un div
	  	$("#imgFoto").attr("src",data.results[0].picture.large)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}

$("#btnInfo").on("click", datosRandom);