document.getElementById("cadastro").addEventListener("submit", function(event){

event.preventDefault();

let nome=document.getElementById("nome").value;
let email=document.getElementById("email").value;

if(nome==="" || email===""){
alert("Preencha todos os campos.");
return;
}

alert("Cadastro realizado com sucesso!");

window.location.href="https://github.com";

});
