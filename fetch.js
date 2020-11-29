/**
 * Endereço base da API do Conduit.
 */
const baseUrl = 'https://conduit.productionready.io/api';

/**
 * Recupera artigos do feed global do Conduit (de 20 em 20).
 */
export async function buscaTodosArtigos() {

  const response = await fetch(`${baseUrl}/articles`);

  // DTO (Data Transfer Object):
  const dados = await response.json();

  return dados;

}
