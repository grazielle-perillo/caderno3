let cpf = document.getElementById("cpf");
let regexCpf = /(^\d{3}\.\d{3}\.\d{3}\-\d{2}$)|(^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$)/
cpf.onblur=function(){
    if(!regexCpf.test(this.value)) {
        document.querySelector(".alert-cpf").style.display = "block";
        return;
    }
document.querySelector(".alert-cpf").style.display = "none";
}

let postal = document.getElementById("postal");
postal.onblur=function(){
    let valorPostal = postal.value;
    if(valorPostal.length!=8) {
        document.querySelector(".alert-postal").style.display = "block";
        return;
    }
document.querySelector(".alert-postal").style.display = "none";
}