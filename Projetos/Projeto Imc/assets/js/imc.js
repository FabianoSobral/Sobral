const form = document.getElementById("form");
form.addEventListener("submit",function(event) {
event.preventDefault();
const peso = document.getElementById("weight").value;
const altura = document.getElementById("height").value;

 const imc = peso / (altura *altura)

 document.getElementById("infos").classList.remove("hidden");

let descricao;

const campoImc = document.getElementById("value");

campoImc.classList.add("attention")

// campoImc.style= `color:blue; font-size: 4rem;`

//Condiçoes do IMC

if(imc < 18.5){
descricao = "Voçê , está abaixo do seu Peso !"

}

else if ((imc > 18.5) &&(imc <= 25)){
descricao = " Voçê , está no Peso Ideal !"
campoImc.style.color= "green";
}
else if ((imc > 25) && (imc <= 30)) {
descricao = "Cuidado! Voçê está com Sobrepeso !"
campoImc.style.color= "black";
}
else if (( imc > 30) && (imc <= 35)) {
 descricao = " Cuidado! Voçê está com Obesidade Moderada !"
 campoImc.style.color= "red";  
}
else if ((imc > 35 && imc <=40)) {
descricao = " Cuidado! Voçê está com Obesidade Severa !"
campoImc.style.color= "yellow";
}
else {
 descricao = " Cuidado! Voçê está com Obesidade Morbida !"
 campoImc.style.color= "blue";  
}



campoImc.textContent = imc.toFixed(2)
document.getElementById("description").textContent = descricao;

 
 });

