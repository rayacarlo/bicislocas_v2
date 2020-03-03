function makespan(msg, elem){
	elem.parent().append('<span>' + msg + '</span>');
}
function removespan(elem){
	elem.parent().find('span').remove();
}
function validateForm(){
	var name = $('#name');
	var lastname = $('#lastname');
	var email = $('#input-email');
	var password = $('#input-password');
	var select = $('select');

	if(name.val().length == 0){
		makespan("Debes ingresar tu nombre", name);
	}
	else if(!name.val().match(/^[a-zA-Z]+$/)){
		makespan("Este campo debe contener sólo letras", name);
	}
	else if(name.val()[0] != name.val()[0].toUpperCase()){
		makespan("La primera letra de tu nombre debe ser mayúscula", name);
	}
	else{
		removespan(name);
	}
	if(lastname.val().length == 0){
		makespan("Debes ingresar tu apellido", lastname);
	}
	else if(!lastname.val().match(/^[a-zA-Z]+$/)){
		makespan("Este campo debe contener sólo letras", lastname);
	}
	else if(lastname.val()[0] != lastname.val()[0].toUpperCase()){
		makespan("La primera letra de tu apellido debe ser mayúscula", lastname);
	}
	else{
		removespan(lastname);
	}
	if(email.val().length == 0){
		makespan("Debes ingresar tu correo electrónico", email);
	}
	else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val())){
		makespan("Debes ingresar un correo electrónico válido", email);
	}
	else{
		removespan(email);
	}
	if(password.val().length == 0){
		makespan("Debes ingresar tu contraseña", password);
	}
	else if(password.val().length < 6){
		makespan("Debes ingresar una contraseña de 6 o más caracteres", password);
	}
	else if(password.val() == "password" || password.val() == 123456 || password.val() == 098754){
		makespan("Debes ingresar una contraseña que no sea tan fácil de adivinar", password);
	}
	else{
		removespan(password);
	}
	if(select.val() == "0"){
		makespan("Debes seleccionar una opción", select);
	}
	else{
		removespan(select);
	}
}