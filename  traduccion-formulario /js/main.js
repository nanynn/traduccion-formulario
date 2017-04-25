function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");

	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
}

translate();
function imprimir (){
	var imEmail = document.getElementById('inputEmail').value;
	var imContra = document.getElementById('inputPassword').value;
	alert ("El correo electrónico ingresado es: " + imEmail + " "+ "La clave ingresada es: " + imContra);
}





/*var boton = document.getElementById('print');

boton.addEventListener("click", function(click){
	click.preventDefault();
	var imEmail = document.getElementById('inputEmail').value;
	var imContra = document.getElementById('inputPassword').value;
	//alert ("El correo electrónico ingresado es: " + imEmail + "<br>" + "La clave ingresada es: " +imContra);
	var espacio = document.getElementById('datos');
	espacio.innerHTML = "El correo electrónico ingresado es: " + imEmail + "<br>" + "La clave ingresada es: " + imContra;
} )*/
