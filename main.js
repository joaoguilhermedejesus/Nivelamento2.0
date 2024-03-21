const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");
for(let i=0; i <botoes.length; i++) {
    botoes[i].onclick = function(){
    
        for(let j=0;j<botoes.length;j++){       
            botoes[j].classList.remove("ativo");
            botoes[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    botoes[i].classList.add("ativo");
}
}
contadores[0].textContent = "Cotagem regresiva";