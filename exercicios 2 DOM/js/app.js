//02 Adicionar um botão ao html com a legenda “Cumprimentar” que, aoser clicado (onclick) mostre um alerta que diga “olá”.
//let  btn = document.getElementById("btn");
//btn.onclick= function(){
//  alert("Olá");
// };

//03 Adicionar outro botão ao html com a legenda “Alterar Fundo” que, quando clicado (onclick) troque a cor do fundo do body para verde.
//let  btn = document.getElementById("btn");
//btn.onclick= function(){
    //let  corpo = document.getElementById("corpo");
    //corpo.style.backgroundColor= "red";
 //};

 //04 Adicionar à página uma imagem que, ao passar do mouse em cima ela, imprima na linha de comando (“estou vendo a imagem”);
//let  imagem = document.getElementById("imagem");
//imagem.onmouseover= function(event){
//console.log("estou te vendo");
//console.log(event.clientX);
//console.log(event.clientY);
//}

//05 Adicionar outra imagem à página que, quando clicada, utilizando addEventListener, imprima na linha de comando (“estou clicando naimagem”).
//let  imagem = document.getElementById("imagem");
//imagem.onclick= function(){
//console.log("estou clicando na imagem");
//}

//06 Definir um addEventListener de forma que, quando o usuário clicar em qualquer parte do body da página, a cor de fundo do body todo mude para vermelho. Para isso, usar o this da função do evento.
//function mudarCor(){
    //this.style.backgroundColor="red";
    //};
//let corpo = document.getElementById("corpo");
//corpo.addEventListener("click", mudarCor);

//07 O usuário é meio chato e, agora, pediu para remover o listener que criamos recentemente, já que ele não consegue interagir bem com a página
//corpo.removeEventListener("click", mudarCor);

//08 Criar um formulário básico com um action que redirecione para www.google.com.br. Usando JavaScript, fazer com que, quando o usuário clicar em Enviar, o formulário não seja enviado, mas sim que seja exibido um alert dizendo “Não é possível enviar”.
//let enviar = document.getElementById("enviar");
//enviar.addEventListener("submit",function(event){
//event.preventDefault();
//alert("Não é possivel enviar");
//window.location.replace("http://www.google.com")
//});

//09Fazer com que o addEventListener criado na imagem imprima em linha de comando a localização do mouse em x e y.
//feito o exercicio 4.

///////////////////////////////////////////Timers///////////////////////////////////////////////////////////

//1.Em uma página HTML básica (podemos usar a mesma de Eventos), fazer com que, se o usuário passar 10 segundos nessa página, seja exibido um alert que diga “tempo esgotado!”
//setTimeout(function(){
     //alert("Hello"); 
    //}, 3000);

//2.A cada 5 segundos que ele passe na página, fazer com que seja exibido um alert que diga “hora do intervalo”.
//setInterval(function() {
    //alert("Hora do intervalo"); 
    //}, 5000);