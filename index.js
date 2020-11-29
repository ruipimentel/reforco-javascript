import { geraCumprimento } from './hello-world.js';

const configuracoes = {
  /**
   * `true` caso o usuário já tenha clicado no botão "Cumprimentar".
   */
  jaCumprimentou: false,

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
  if (configuracoes.jaCumprimentou) {
    alert('Já cumprimentei ao menos 1 vez anteriormente...')
  }
  document.querySelector('#cumprimento').innerHTML = `<b>${
    configuracoes.mensagemBoasVindas
  }</b>`;
  configuracoes.jaCumprimentou = true;
}

window.cumprimentar = cumprimentar;

