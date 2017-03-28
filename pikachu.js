
function Pokemon(nombre,color,puntosAtaque){
	this.nombre = nombre;
	this.color = color;
	this.nivelDeAmistad = 0;
	this.vida = 100;
	this.puntosAtaque = puntosAtaque;

	this.saludar = function(){
		console.log("hola, me llamo "+ this.nombre)
	};

	this.pelear = function(){
		pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
	}


 }

 var pokemons = [ ];
 function crearPokemon(){
 	var nombrePokemon = document.getElementById("nombrePokemon").value;
 	var colorPokemon = document.getElementById("colorPokemon").value;
 	var puntosAtaque = document.getElementById("puntosAtaque").value;


 	var pokemon = new Pokemon(nombrePokemon, colorPokemon, parseInt(puntosAtaque));
 	pokemons.push(pokemon);
 	
	opcionesPokemones();
	opcionesPokemones2();
	 }

function opcionesPokemones(){
 var listaPokemones = document.getElementById("lista");
 listaPokemones.innerHTML=" ";
   pokemons.forEach(function(pokemon){
   	 var elemento = document.createElement("option");
     elemento.innerText=pokemon.nombre;
     listaPokemones.appendChild(elemento);
 });

}

function opcionesPokemones2(){
 var listaPokemones2 = document.getElementById("lista2");
 listaPokemones2.innerHTML=" ";
   pokemons.forEach(function(pokemon){
   	 var elemento = document.createElement("option");
     elemento.innerText=pokemon.nombre;
     listaPokemones2.appendChild(elemento);
 });

}
