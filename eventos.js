var col1 =document.getElementById("col1");
var col2 =document.getElementById("col2");
var col3 =document.getElementById("col3");
var tabla =document.getElementById("tabla");
var nav =document.getElementById("nav");
var nav_id =document.getElementById("nav_id");
var link =document.getElementByTagName("link").item(0);

var boton = document.querySelector("#boton");
var boton1 = document.querySelector("#boton1");
var boton2 = document.querySelector("#boton2");
boton.addEventListener("click", mostrarMaterialize);
function mostrarMaterialize() {
	col1.className="col s12 m12 l12";
	col2.className="col s12 m12 l12";
	col3.className="col s12 m12 l12";
	tabla.className="responsive-table";
	nav.className="nav-extended";
	nav_id.className="nav-wrapper";
	boton.className="btn";
	boton1.className="btn";
	boton2.className="btn";
	link.href="css/materialize.min.css";
	
}