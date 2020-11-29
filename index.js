import { geraCumprimento } from './hello-world.js';

const configuracoes = {
  /**
   * Registra os horários de todas as solicitações de cumprimento do usuário.
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
      configuracoes.solicitacoes.map(function(sol){
        return `<li>${sol}</li>`;
      }).join('')
    }</ul>`;
  }
  document.querySelector('#cumprimento').innerHTML = `<b>${
    configuracoes.mensagemBoasVindas
  }</b>`;
  configuracoes.solicitacoes.push(new Date());
}

window.cumprimentar = cumprimentar;

