function validateForm(){
	var nameUser = document.getElementById("name");
	var lastNameUser = document.getElementById("lastname");
	var emailUser = document.getElementById("input-email");
	var passwordUser = document.getElementById("input-password");
	var selectClass = document.getElementsByTagName("select")[0];

	function alert(text, node){
		var span = node.parentNode.children[2];
		if(!span){
			var span = document.createElement("span");
			}
		span.innerHTML = text;
		node.parentNode.appendChild(span);
	}

	function remove(element){
		var span = element.parentNode.children[2];
		if(!span) {return};
		element.parentNode.removeChild(span);
	}

	if(nameUser.value.length == 0){
		alert("Debes ingresar tu nombre", nameUser);
	}
	else if(!nameUser.value.match(/^[a-zA-Z]+$/)){
		alert("Este campo debe contener sólo letras", nameUser);
	}
	else if(nameUser.value[0] != nameUser.value[0].toUpperCase()){
		alert("La primera letra de tu nombre debe ser mayúscula", nameUser);
	}
	else{
		remove(nameUser);
	}
	if(lastNameUser.value.length == 0){
		alert("Debes ingresar tu apellido", lastNameUser);
	}
	else if(!lastNameUser.value.match(/^[a-zA-Z]+$/)){
		alert("Este campo debe contener sólo letras", lastNameUser);
	}
	else if(lastNameUser.value[0] != lastNameUser.value[0].toUpperCase()){
		alert("La primera letra de tu apellido debe ser mayúscula", lastNameUser);
	}
	else{
		remove(lastNameUser);
	}
	if(emailUser.value.length == 0){
		alert("Debes ingresar tu correo electrónico", emailUser);
	}
	else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailUser.value)){
		alert("Debes ingresar un correo electrónico válido", emailUser);
	}
	else{
		remove(emailUser);
	}
	if(passwordUser.value.length == 0){
		alert("Debes ingresar tu contraseña", passwordUser);
	}
	else if(passwordUser.value.length < 6){
		alert("Debes ingresar una contraseña de 6 o más caracteres", passwordUser);
	}
	else if(passwordUser.value == "password" || passwordUser.value == 123456 || passwordUser.value == 098754){
		alert("Debes ingresar una contraseña que no sea tan fácil de adivinar", passwordUser);
	}
	else{
		remove(passwordUser);
	}
	if(selectClass.value == "0"){
		alert("Debes seleccionar una opción", selectClass);
	}
	else{
		var span = selectClass.parentNode.children[1];
		if(!span) {return};
		selectClass.parentNode.removeChild(span);
	}
}