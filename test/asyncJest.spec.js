const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    const data = await answerPhone(true)
    expect.assertions(1);
    expect(data).toBe('Oi!');
  });
  test("ocupado", async () => {
    expect.assertions(1);
    try {
      await answerPhone(false)
    } catch (error) {
      expect(error).toBe('Infelizmente não podemos atender...')
    }
  });
});

// promisse
// uso .toBe pq to comparando valor primitivo. string, bolean
// a função answerphone, recebe um parametro answer, que é uma promisse
// promisse que promete retornar alguma coisa
// essa promisse, tem uma function que recebe, 2 parametros
// resolve(quando da certo) e reject (quando deu erro)
// dentro da promisse, tenho o settimeout de 3segundos,
// se answerphone for true recebe a string 'oi!', resolve
// se for false recebe a string 'infelizmente nao podemos atender...' reject
// como se trata de uma promisse posso usar o async await e catch then
// tem async no titulo - explicito na função que é uma função assincrona
// entao eu retorno sem return as asserçoes e consigo fazer o teste funcionar
// passo o async na função test
// na const data forço meu código a esperar o retorno da função answerphone
// que vai receber o parametro true e no segundo momento false
// usando o await p esperar sem necessidade de return
// expect.assertions(1) p deixar claro p js que to aguardando uma asserção. 1 expect só.
// expect vai ter como valor meu data, vai fazer um toBe, e qdo for true, vai ser Oi, resolve
// o reject, uso o try catch, eu começo com o try, tentar rodar a função,
// novamente forço a esperar, await e a função answerPhone
// catch, parametro error, deu errado, e no expect passando novamente o parametro erro que espera
// que em caso de erro seja a frase 'Infelizmente não podemos atender...'

// exemplo de falso positivo:
// describe("o retorno do telefonema", () => {
//   test("atende", () => {
//     if (answerPhone === true)
//     expect(answerPhone.toBe(['Oi!']))
//   });
//   test("ocupado", () => {
//     if(!answerPhone)
//     expect(answerPhone.toBe(['Infelizmente não podemos atender...']))
//   });
// });
