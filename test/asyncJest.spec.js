const answerPhone = require("../src/asyncJest");

/* #vqv
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", async () => {
  test("atende", () => {
    try {
      const response = answerPhone(true);
      expect(response).toBe('Oi!')
    } catch (error) {   
    }    
  });
  test("ocupado", () => {
    try {
      const response = answerPhone(false);
      expect(response).toBe('Infelizmente não podemos atender...')
    } catch (error) {   
    }    
  });  
});
