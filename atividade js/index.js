var titulo = document.getElementById("bomDia");//peguei o elemento
console.log(titulo);
titulo.style.color = "red";

titulo.innerHTML = "boa tarde minhas princesas"//alterei valor de titulo

//criando elemento
function criarButton (){
    let btn = document.createElement("BUTTON");
    btn.innerHTML = "Clique aqui";
    btn.setAttribute("class","createButton")
    document.body.appendChild(btn);
    console.log(btn);
}


