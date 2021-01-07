const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", () => {
    const mock = jest.fn().mockResolvedValue('Oi!');
    expect(mock()).resolves.toBe('Oi!');
    expect(mock).toBeCalledTimes(1);
  });

  test("ocupado", () => {
    const mock = jest.fn().mockRejectedValue('Infelizmente não podemos atender...');
    expect(mock()).rejects.toBe('Infelizmente não podemos atender...');
    expect(mock).toBeCalledTimes(1);
  });
});
