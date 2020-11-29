import { geraCumprimento } from './hello-world.js';

const configuracoes = {
  numero: 42,
  variavelInutil: true,

  /**
   * Mensagem de boas vindas para o(a) usuário(a).
   *
   * Dependerá da hora de acesso do(a) usuário(a).
   */
  mensagemBoasVindas: `${geraCumprimento()}, caro(a) usuário(a)!`,

  geraMensagemBoasVindas: function() {
    return this.mensagemBoasVindas;
  }
};

// Imprime no documento HTML de modo síncrono:
console.log(`<b>${configuracoes.geraMensagemBoasVindas()}</b>`);
