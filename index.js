/**
 * Mensagem de boas vindas para o(a) usuário(a).
 *
 * Dependerá da hora de acesso do(a) usuário(a).
 */
let mensagemBoasVindas = ", caro(a) usuário(a)!";

/**
 * Data e hora do momento em que a declaração for executada.
 */
const agora = new Date();

if (agora.getHours() < 12) {
  mensagemBoasVindas = `Bom dia${mensagemBoasVindas}`;
} else {
  mensagemBoasVindas = `Boa tarde${mensagemBoasVindas}`;
}

// Imprime no documento HTML de modo síncrono:
document.write(`<b>${mensagemBoasVindas}</b>`);
