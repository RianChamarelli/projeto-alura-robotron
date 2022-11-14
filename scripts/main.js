import { somarOuSubtrair } from "./somarOuSubtrair.js";
import { pecas } from "./estatisticas.js";
import { atualizaEstatistica } from "./atualizaEstatistica.js"

const ajuste = document.querySelectorAll(".controle-ajuste");

ajuste.forEach((element) => {
    element.addEventListener('click', (event) => {
        somarOuSubtrair(element.classList[1], event.target.parentNode);
        atualizaEstatistica(element.classList[1], event.target.dataset.pecas);
    })
})










