const mockFunctions = require('../src/mockFunctions');

/*
Criamos uma série de funções com eficiência duvidosa.
Elas estão no arquivo 'src/mockFunctions.js'.
Crie mock functions para cada uma das operações de modo que os cálculos sejam feitos corretamente,
não como estão sendo feitos no arquivo original.
A idéia é que os novos testes sobrescrevam os testes
importados apenas na suite de testes abaixo.

Importante! A correção de código via mock functions não é uma aplicação usual.
O foco aqui é a utilização de mock functions.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('verifica as funções e os mocks', () => {
  let spyMultiply = jest.spyOn(mockFunctions, 'multiply')
    .mockImplementation((a, b) => a * b);
  let spyPower = jest.spyOn(mockFunctions, 'power')
    .mockImplementation((a, b) => a ** b);
  let spyFactorial = jest.spyOn(mockFunctions, 'factorial')
    .mockImplementation((a) => (a === 1 || a === 0) ? 1 : a * mockFunctions.factorial(a - 1));
  let spyAdd = jest.spyOn(mockFunctions, 'add')
    .mockImplementation((a,b) => a + b);
  let spySubtract = jest.spyOn(mockFunctions, 'subtract')
    .mockImplementation((a,b) => a - b);
  let spyDivide = jest.spyOn(mockFunctions, 'divide')
    .mockImplementation((a,b) => a / b);

  test('testa função add', () => {
    expect(spyAdd(1, 2)).toEqual(3);
    expect(spyAdd(8, 37)).toEqual(45);
    expect(spyAdd(-11, 25)).toEqual(14);
    expect(spyAdd(13, -188)).toEqual(-175);
    expect(spyAdd(7, 26)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(spySubtract(899, 35)).toEqual(864);
    expect(spySubtract(-17, 333)).toEqual(-350);
    expect(spySubtract(45, 97)).toEqual(-52);
    expect(spySubtract(23, -108)).toEqual(131);
    expect(spySubtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(spyMultiply(1, 2)).toEqual(2);
    expect(spyMultiply(0, 5)).toEqual(0);
    expect(spyMultiply(-4, 9)).toEqual(-36);
    expect(spyMultiply(-12, -7)).toEqual(84);
    expect(spyMultiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(spyDivide(169, 13)).toEqual(13);
    expect(spyDivide(-1900, 5)).toEqual(-380);
    expect(spyDivide(42, 7)).toEqual(6);
    expect(spyDivide(729, 243)).toEqual(3);
    expect(spyDivide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(spyPower(10, 2)).toEqual(100);
    expect(spyPower(2, 10)).toEqual(1024);
    expect(spyPower(5, 5)).toEqual(3125);
    expect(spyPower(1, 10)).toEqual(1);
    expect(spyPower(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    expect(
      spyFactorial(5)).toEqual(120);
    expect(
      spyFactorial(10)).toEqual(3628800);
    expect(
      spyFactorial(3)).toEqual(6);
    expect(
      spyFactorial(8)).toEqual(40320);
    expect(
      spyFactorial(2)).toEqual(2);
  });
});
