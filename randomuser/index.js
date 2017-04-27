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
	    $("#txtNombre").html(data.results[0].name.title +". "+
	    					 data.results[0].name.first +" "+ 
	    					 data.results[0].name.last); //hace referencia a una seccion este caso un div
	    $("#txtGender").html("Genero: " + data.results[0].gender);
	  	$("#imgFoto").attr("src",data.results[0].picture.large);

	  	$("#txtLoca").html("Dirección: " + data.results[0].location.street +", "+
	  					   data.results[0].location.city +", "+
	  					   data.results[0].location.state +", "+
	  					   data.results[0].location.postcode);
	  	$("#txtemail").html(data.results[0].email);
	  	$("#txtLogin").html("Login: <br>" + data.results[0].login.username +"<br>"+
	  					   data.results[0].login.password +"<br>"+
	  					   data.results[0].login.salt +"<br>"+
	  					   data.results[0].login.md5 +"<br>"+
	  					   data.results[0].login.shal +"<br>"+
	  					   data.results[0].login.sha256);
	  	$("#txtDob").html(data.results[0].dob);
	  	$("#txtRegis").html(data.results[0].registered);
	  	$("#txtPhone").html("Telefono: " + data.results[0].phone);
	  	$("#txtCell").html("Celular: " + data.results[0].cell);
	  	$("#txtID").html("ID: " +data.results[0].id.name +"-"+
	  					data.results[0].id.value);
	  	$("#txtNat").html(data.results[0].nat);

	  	$("#txtInfo").html(data.info.seed +" "+
	  					data.info.results +" "+
	  					data.info.page +" "+
	  					data.info.version);
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}

$("#btnInfo").on("click", datosRandom);