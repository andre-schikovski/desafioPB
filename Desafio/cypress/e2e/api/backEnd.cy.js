import Ajv from 'ajv';
const ajv = new Ajv();

describe('API - JSONPlaceholder - Users Endpoint', () => {
  const baseUrl = 'http://jsonplaceholder.typicode.com/users';

  // Importar o Schema JSON
  let userSchema;

  before(() => {
    cy.readFile('schemas/user.schema.json').then((schema) => {
      userSchema = schema;
    });
  });

  it('GET - Retorno de usuários cadastrados', () => {
    cy.request('GET', baseUrl).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      
      response.body.forEach((user) => {
        const validate = ajv.compile(userSchema);
        const valid = validate(user);
        expect(valid, JSON.stringify(validate.errors)).to.be.true;
      });
    });
  });

  it('POST - Cadastrar novo usuário', () => {
    const newUser = {
      name: 'André Luiz',
      username: 'andreqa',
      email: 'andre@example.com'
    };

    cy.request('POST', baseUrl, newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newUser);
    });
  });

  it('PUT - Atualização de dados de usuário já cadastrado', () => {
    const updatedUser = {
      id: 1,
      name: 'André Atualizado',
      username: 'andreupdate',
      email: 'andre@update.com'
    };

    cy.request('PUT', `${baseUrl}/1`, updatedUser).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatedUser);
    });
  });

  it('DELETE - Apagar usuário já cadastrado', () => {
    cy.request('DELETE', `${baseUrl}/1`).then((response) => {
      expect(response.status).to.eq(200); // JSONPlaceholder retorna 200, simula deleção
    });
  });
});
