const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

async function testing(bool, status, result) {
  expect.assertions(1);
  if (status === 'resolves') {
    await expect(answerPhone(bool)).resolves.toBe(result);
  } else {
    await expect(answerPhone(bool)).rejects.toBe(result);
  }
}

describe('o retorno do telefonema', () => {
  test('atende', async () => {
    await testing(true, 'resolves', 'Oi!');
  });
  test('ocupado', async () => {
    await testing(false, 'rejects', 'Infelizmente não podemos atender...');
  });
});
