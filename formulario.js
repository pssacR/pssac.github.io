
let txtNombre = document.getElementById("txtNombre");
let numTel = document.getElementById("numTel");
let txtMail = document.getElementById("txtMail");
let txtArea = document.getElementById("txtArea");
let select = document.getElementById("select");
let ltaErrores = document.getElementById("ltaErrores");
let ltaMensajes = document.getElementById("ltaMensajes");

function validar() {
ltaErrores.innerHTML = "";
txtNombre.classList.remove("error");
numTel.classList.remove("error");
txtMail.classList.remove("error");
txtArea.classList.remove("error");
select.classList.remove("error");
let errores = [];
let regex_tel = /^[1-9]\d{9}$/;
const exRegMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let nbre = txtNombre.value.trim();
let texto = document.getElementById("txtArea").value;
let selectorvacio = document.getElementById("select").value;
if(nbre.length == 0) {
errores.push("Debe escribir su nombre");
txtNombre.classList.add("error");
}
if(numTel.value.length>10) {
errores.push("El telefono debe contener 10 digitos");
numTel.classList.add("error");
}
if(numTel.value.length>0 && !regex_tel.test(numTel.value)){
errores.push("El número de teléfono es inválido");
numTel.classList.add("error");
}
if(!exRegMail.test(txtMail.value)){
errores.push("Email invalido");
txtMail.classList.add("error");
}

if(selectorvacio.trim() === ""){
errores.push("Debe seleccionar un servicio");
select.classList.add("error");
}
if(texto.trim() === ""){
errores.push("Debe dar detalles sobre el turno que desea");
txtArea.classList.add("error");
}

//
for(let err of errores) {
let li = document.createElement("li");
li.innerHTML = err;
ltaErrores.appendChild(li);
}
if(errores.length == 0) {
let li = document.createElement("li");
if(numTel.value.length>0){
  li.innerHTML = `Hola ${nbre}, te llamaremos al ${numTel.value} para recordarte tu cita`;
}else{
  li.innerHTML = `Hola ${nbre}, te escribiremos al ${txtMail.value} para recordarte tu cita`;
}


ltaMensajes.appendChild(li);
document.forms[0].reset();

return false;//return true;//false para no enviar el form 
} else {
return false;//si hubo errores cancelar el envío
}
}