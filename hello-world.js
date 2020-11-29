/**
 * Gera o cumprimento adequado, dentre os possíves listados a seguir,
 * de acordo com a hora especificada.
 * * `'Boa madrugada'`
 * * `'Bom dia'`
 * * `'Boa tarde'`
 * * `'Boa noite'`
 *
 * @param {number} hora Hora (inteira) para a qual se deseja gerar o
 *                      cumprimento. Caso não especificada, utiliza a
 *                      hora atual.
 */
export const geraCumprimento = function(hora = new Date().getHours()) {

  switch (hora) {
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
};
