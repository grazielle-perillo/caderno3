//011 - Use o método getElementById para encontrar o elemento <p> e altere o texto para "Olá"
// let elemento = document.getElementById("demo");
// elemento.innerText = "Olá";

//02 Use o método getElementsByTagName para encontrar o primeiro elemento <p>  e altere o texto para "Olá".
// let elemento = document.getElementsByTagName("p");
// elemento[0].innerText = "Olá";

//03 Altere o texto do primeiro elemento que possui o nome da classe "test"
// document.querySelector(".test").innerText = "Olá";
// ou
// document.querySelectorAll(".test")[0].innerText = "Olá";
// ou
// document.getElementsByClassName("test")[0].innerText = "Olá";


//04 Use HTML DOM para alterar o valor do atributo src da imagem.
// document.getElementById("image").setAttribute("src", "image.jpg");

//05 Use HTML DOM para alterar o valor do campo de entrada(value)
// document.getElementById("myText").value = "teste"
// ou
// document.getElementById("myText").setAttribute("value", "teste")

//06 Mude a cor do texto do elemento <p> para "vermelho".
// document.getElementById("demo").style.color = "red";

//07 Altere o tamanho da fonte do elemento para 40 pixels.
// document.getElementById("demo").style.fontSize = "40px";

//08 Use apropriedade CSS display para ocultar oelemento.
document.getElementById("demo").style.display = "none";