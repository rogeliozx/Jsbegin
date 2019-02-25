'use strict'

var formulario= document.querySelector('#formpeliculas');

formulario.addEventListener('submit',()=>{
	console.log("entre");
var titulo= document.querySelector('#addpelicula').value;
if(!(titulo==null || titulo=="")){
	localStorage.setItem(titulo,titulo);
}
	


});

var ul=document.querySelector('#peliculas-listas')
for(var i in localStorage){
	console.log(localStorage[i]);
	if(typeof localStorage[i]=="string"){
		
		var li=document.createElement("li");
		li.append(localStorage[i]);
		ul.append(li);
	}

}

var formulariob= document.querySelector('#formborrar');

formulariob.addEventListener('submit',()=>{
	console.log("entre");
var titulo= document.querySelector('#eliminapelicula').value;
if(!(titulo==null || titulo=="")){
	localStorage.removeItem(titulo);
}
	


});