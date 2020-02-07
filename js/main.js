function validateForm(){
	var nameUser = document.getElementById("name").value;
	var lastNameUser = document.getElementById("lastname").value;
	var emailUser = document.getElementById("input-email").value;
	var passwordUser = document.getElementById("input-password").value;
	var selectClass = document.getElementsByTagName("select")[0].value;

	if(nameUser == "" || nameUser.length == 0){
		alert("Debes ingresar tu nombre");
		return;
	}
	if(nameUser[0] != nameUser[0].toUpperCase()){
		alert("La primera letra de tu nombre debe ser mayúscula");
		return;
	}
	if(lastNameUser == "" || lastNameUser.length == 0){
		alert("Debes ingresar tu apellido");
		return;
	}
	if(lastNameUser[0] != lastNameUser[0].toUpperCase()){
		alert("La primera letra de tu apellido debe ser mayúscula");
		return;
	}
	if(emailUser == "" || emailUser.length == 0){
		alert("Debes ingresar tu correo electrónico");
		return;
	}
	if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailUser)){
		alert("Debes ingresar un correo electrónico válido");
		return false;
	}
	if(passwordUser == "" || passwordUser.length == 0){
		alert("Debes ingresar tu contraseña");
		return;
	}
	if(passwordUser.length < 6){
		alert("Debes ingresar una contraseña de 6 o más caracteres");
		return;
	}
	if(passwordUser == "password" || passwordUser == 123456 || passwordUser == 098754){
		alert("Debes ingresar una contraseña que no sea tan fácil de adivinar");
		return;
	}
	if(selectClass == "0"){
		alert("Debes seleccionar una opción");
		return;
	}
}