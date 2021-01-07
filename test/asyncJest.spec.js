let answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    answerPhone = jest.fn().mockResolvedValue('Oi!');
    
    await answerPhone();
    expect(answerPhone).toHaveBeenCalled();
    expect(answerPhone).toHaveBeenCalledTimes(1);
    expect(answerPhone).toHaveBeenCalledWith();
    expect(answerPhone()).resolves.toBe('Oi!');
    expect(answerPhone).toHaveBeenCalledTimes(2);
  });
  test("ocupado", async () => {
    answerPhone = jest.fn().mockRejectedValue('Infelizmente não podemos atender...');

    expect(answerPhone).toHaveBeenCalledTimes(0);
    expect(answerPhone()).rejects.toMatch('Infelizmente não podemos atender...');
    expect(answerPhone).toHaveBeenCalledWith();
    expect(answerPhone).toHaveBeenCalledTimes(1);
  });
});
