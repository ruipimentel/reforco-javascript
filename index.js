import { geraCumprimento } from './hello-world.js';
import { agruparEContar, dateToString } from './formatter.js';

const configuracoes = {
  /**
   * Registra os horários de todas as solicitações de cumprimento do usuário.
   *
   * @type {Date[]}
   */
  solicitacoes: [],

  /**
   * Mensagem de boas vindas para o(a) usuário(a).
   *
   * Dependerá da hora de acesso do(a) usuário(a).
   */
  mensagemBoasVindas: `${geraCumprimento()}, caro(a) usuário(a)!`,

};

/**
 * Método disponível para o HTML como _handler_ de clique do botão
 * "Cumprimentar".
 */
export function cumprimentar() {
  if (configuracoes.solicitacoes.length > 0) {
    document.querySelector('#lista-solicitacoes').innerHTML = `<ul>${
      agruparEContar(configuracoes.solicitacoes.map(dateToString)).map(function(sol) {
        return `<li>${ sol }</li>`;
      }).join('')
    }</ul>`;
  }
  document.querySelector('#cumprimento').innerHTML = `<b>${
    configuracoes.mensagemBoasVindas
  }</b>`;
  configuracoes.solicitacoes.push(new Date());
}

setInterval(() => {
  const solEncontrada = configuracoes.solicitacoes.find(
    sol => Date.now() - sol.getTime() < 5000
  );
  if (!solEncontrada) {
    document.querySelector('#cumprimento').innerHTML = `Aguardando usuário...`;
    configuracoes.solicitacoes = [];
    document.querySelector('#lista-solicitacoes').innerHTML = ``;
  }
}, 1000);

window.cumprimentar = cumprimentar;

