const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'

    botaoConclui.addEventListener('click', concluirTarefa)

    return botaoConclui
}

const concluirTarefa = (evento) => { // Parâmetro evento vai trazer informações sobre o 'click'
    const botaoConclui = evento.target // A propriedade .target serve para marcarmos que apertamos no botao botaoConclui

    const tarefaCompleta = botaoConclui.parentElement // Pegamos a tag parente do botao clicao anteriormente, para mudarmos o CSS dela

    tarefaCompleta.classList.toggle('done') // Atua como um .add, porém possui um true or false. Basicamente se eu aperto 1 vez, ele muda a classe CSS. Se eu apertar denovo ele remove a classe. Se apertar denovo adiciona denovo. Então ele é como um interruptor que fica ON ou OFF
}

export default BotaoConclui // Aqui está falando que está exportando apenas o BotaoConclui, mas daria para exportar o concluirTarefa

/*
export {
    BotaoConclui,
    concluirTarefa
}
*/