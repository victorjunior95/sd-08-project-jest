const answerPhone = require("../src/asyncJest");

describe("o retorno do telefonema", () => {
  test("atende", () => {
    return answerPhone(true).then(value => {
      expect('Oi!').toBe(value);
    });
  });
  test("ocupado", () => {
    return answerPhone(false).catch(value => {
      expect('Infelizmente não podemos atender...').toBe(value);
    });
  });
});
