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

switch (agora.getHours()) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    mensagemBoasVindas = `Boa madrugada${mensagemBoasVindas}`;
    break;
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
    mensagemBoasVindas = `Bom dia${mensagemBoasVindas}`;
    break;
  case 12:
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    mensagemBoasVindas = `Boa tarde${mensagemBoasVindas}`;
    break;
  default:
    mensagemBoasVindas = `Boa noite${mensagemBoasVindas}`;
    break;
}

// Imprime no documento HTML de modo síncrono:
document.write(`<b>${mensagemBoasVindas}</b>`);
