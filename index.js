import { geraCumprimento } from './hello-world.js';

/**
 * Mensagem de boas vindas para o(a) usuário(a).
 *
 * Dependerá da hora de acesso do(a) usuário(a).
 */
const mensagemBoasVindas = `${geraCumprimento()}, caro(a) usuário(a)!`;

// Imprime no documento HTML de modo síncrono:
console.log(`<b>${mensagemBoasVindas}</b>`);
