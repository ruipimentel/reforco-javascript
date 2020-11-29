/**
 * Mensagem de boas vindas para o(a) usuário(a).
 *
 * Dependerá da hora de acesso do(a) usuário(a).
 */
const mensagemBoasVindas = `${geraCumprimento()}, caro(a) usuário(a)!`;

/**
 * Gera o cumprimento adequado, dentre os possíves listados a seguir,
 * de acordo com a hora atual.
 * * `'Boa madrugada'`
 * * `'Bom dia'`
 * * `'Boa tarde'`
 * * `'Boa noite'`
 */
function geraCumprimento() {

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
      return `Boa madrugada`;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      return `Bom dia`;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
      return `Boa tarde`;
    default:
      return `Boa noite`;
  }
}

// Imprime no documento HTML de modo síncrono:
document.write(`<b>${mensagemBoasVindas}</b>`);
