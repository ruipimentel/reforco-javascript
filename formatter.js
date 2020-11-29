/**
 * Transforma a data especificada em uma `string` no formato
 * `'DD/MM/YYYY HH:mm:ss'`.
 *
 * @param {Date} date Data a ser convertida para `string`.
 */
export function dateToString(date) {
  const padStart2 = n => `${n}`.padStart(2, '0');
  return `${
    [ date.getDate(), date.getMonth(), date.getFullYear() ].map(padStart2).join('/')
  } ${
    [ date.getHours(), date.getMinutes(), date.getSeconds() ].map(padStart2).join(':')
  }`;
}

/**
 * Retorna um novo `Array` de `string`s, contendo apenas elementos únicos (elimina
 * registros duplicados do `Array` de entrada).
 *
 * Parte da suposição de que os elementos repetidos serão consecutivos (vizinhos).
 *
 * @param {string[]} strs `Array` de `string`s a ter seus membros repetidos agrupados
 *                        e contados.
 */
export function agrupar(strs) {
  return strs.filter(function(str, i) {

    // Se é repetida:
    if (i > 0 && str === strs[i - 1]) {
      return false;
    } else {
      return true;
    }

  });
}

