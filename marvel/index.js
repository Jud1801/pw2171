const rq 	= require('electron-require');
const main 	= rq.remote('./main.js');
const $ 	= require("jquery");

//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=
var buscarPersonaje = function(){
	var personaje = $("#txtPersonaje").val();
	var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=";
	var cantidadComics = 0;
	var cadenaComics = "";


	if(personaje == ""){
		alert("Ingrese el personaje")
		$("#txtPersonaje").focus();
		return //Ya no continua con la función
	}
	url = url + personaje;

	$.ajax({
		dataType: "json",
		url: url,
		success: function(response){ //Data o response es la respuesta json
			if(response.code==200){ //ok.cat
				$("#imgFoto").show("slow");
				$("#imgFoto").attr("src", response.data.results[0].thumbnail.path + "." +
										  response.data.results[0].thumbnail.extension);
				$("#txtNombre").html(response.data.results[0].name);
				$("#txtDescripcion").html("");
				
				if(response.data.results[0].description!=""){
					$("#txtDescripcion").html("<b>Descripción: </b><br>" + response.data.results[0].description);
				}
				cantidadComics=response.data.results[0].comics.returned;
				for(var i=0;i<cantidadComics;i++){
					cadenaComics+=response.data.results[0].comics.items[i].name+"<br>";
				}

				$("#txtComics").html("<br><b>Comics:</b><br>" + cadenaComics);
					
			}
		}
	})
}

//Posiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus();

//Evento del boton btnBuscar-click
$("#btnBuscar").on("click", buscarPersonaje);