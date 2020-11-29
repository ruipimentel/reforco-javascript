const cumprimentosPossiveis = [
  'Boa madrugada',
  'Bom dia',
  'Boa tarde',
  'Boa noite'
];

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
  return cumprimentosPossiveis[Math.floor(hora / 6)];
};
