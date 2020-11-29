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

/**
 * Envia as credenciais especificadas para o _endpoint_ de login.
 */
export async function postLogin(username, senha) {

  const response = await fetch(
    `${baseUrl}/users/login`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: username,
          password: senha
        }
      })
    }
  );

  if (!response.ok) {
    throw new Error(`Não foi possível fazer login. Status code: ${response.status}`);
  }

  // DTO (Data Transfer Object):
  const dados = await response.json();

  /*
  Segundo a documentação da API, o DTO tem esse formato:
  {
    "user": {
      "id": 126320,
      "email": "testerui@testerui.com",
      "createdAt": "2020-11-29T03:13:27.556Z",
      "updatedAt": "2020-11-29T03:13:27.562Z",
      "username": "testerui",
      "bio": null,
      "image": null,
      "token": "eyJ0e"
    }
  }
  */

  return dados;

}
