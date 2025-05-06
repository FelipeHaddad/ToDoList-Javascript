import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";

const criarTarefa = (evento) => {
  // O formulario por padrão tem o comportamento de enviar a informação para algum lugar, como algum servidor, a propria aplicacao etc. e o evento 'click' sempre passa um objeto com informações sobre o evento e podemos passar esse objeto como parâmetro da função.Com isso vamos impedir seu comportamento padrão de recarregar a página usando .preventDefault
  evento.preventDefault();

  const lista = document.querySelector("[data-list]");
  const tarefa = document.createElement("li"); // Cria tag <li> do DOM

  tarefa.classList.add("task"); // classList permite escolher uma classe CSS e o .add adiciona essa classe na tag <li>

  // A baixo estamos salvando o conteúdo dentro da div cujo data attribute referencia na variavel "valor" e estamos dando print no console
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo; // Adiciona dentro da lista a tag <p> do conteudo

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  lista.appendChild(tarefa); // Adiciona na lista a tarefa <li> do DOM criada anteriormente
  input.value = " ";
};

const novaTarefa = document.querySelector("[data-form-button]"); // Aqui capturamos o botão la da página HTML

novaTarefa.addEventListener("click", criarTarefa); // Aqui adicionamos um escutar para o botão novaTarefa, onde ele vai ficar de olho para quando houver a ação click no botão e quando acontecer vai chamar uma função que vai imprimir no console a frase 'fui clicado'