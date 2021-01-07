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
  
  jest.mock('../src/mockFunctions.js')
  
  test('testa função add', () => {
    expect(mockFunctions.add(4, 1)).toEqual(3);
    expect(mockFunctions.add(53, 8)).toEqual(45);
    expect(mockFunctions.add(25, 11)).toEqual(14);
    expect(mockFunctions.add(-188, -13)).toEqual(-175);
    expect(mockFunctions.add(26, -7)).toEqual(33);
  });
  test('testa função subtract', () => {
    expect(mockFunctions.subtract(829, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, -333)).toEqual(-350);
    expect(mockFunctions.subtract(45, -97)).toEqual(-52);
    expect(mockFunctions.subtract(23, 108)).toEqual(131);
    expect(mockFunctions.subtract(-133, 29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    expect(mockFunctions.multiply(2, 1)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-36, 1)).toEqual(-36);
    expect(mockFunctions.multiply(-588, -7)).toEqual(84);
    expect(mockFunctions.multiply(10051, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    expect(mockFunctions.divide(169, 13)).toEqual(2197);
    expect(mockFunctions.divide(-76, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(294);
    expect(mockFunctions.divide(729, 243)).toEqual(177147);
    expect(mockFunctions.divide(11, 11)).toEqual(121);
  });
  test('testa função power', () => {
    expect(mockFunctions.power(100, 2)).toEqual(0.01);
    expect(mockFunctions.power(2, 1)).toEqual(1);
    expect(mockFunctions.power(5, 2)).toEqual(0.2);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(0);
  });
  test('testa função factorial', () => {
    expect(mockFunctions.factorial(5)).toEqual(25);
    expect(mockFunctions.factorial(10)).toEqual(100);
    expect(mockFunctions.factorial(3)).toEqual(9);
    expect(mockFunctions.factorial(8)).toEqual(64);
    expect(mockFunctions.factorial(2)).toEqual(4);
  });
});
