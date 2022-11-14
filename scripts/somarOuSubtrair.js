export let somarOuSubtrair = (operacao, controle) => {
    const contador = controle.querySelector('.controle-contador');

    if (operacao === "somar"){
        contador.value = parseInt(contador.value) + 1;
    }else{
        contador.value = parseInt(contador.value) - 1;
    }
}

