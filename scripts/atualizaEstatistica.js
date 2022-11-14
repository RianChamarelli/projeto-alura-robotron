import { pecas } from "./estatisticas.js";

const estatistica = document.querySelectorAll("[data-estatistica]");

export let atualizaEstatistica = (operacao, peca) => {
    estatistica.forEach((element) => {
        if (operacao === "somar"){
            element.textContent = parseInt(element.textContent) + pecas[peca] [element.dataset.estatistica];
        }else{
            element.textContent = parseInt(element.textContent) - pecas[peca] [element.dataset.estatistica];
        }    
    })
}