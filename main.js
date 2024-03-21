const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo")

for(let i=0); i <botoes.length; i++) {
    botoes[i].onclick = function(){
        botoes[j].classList.remove("ativo");
        botoes[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    botoes[i].classList.add("ativo");
}