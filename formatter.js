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
