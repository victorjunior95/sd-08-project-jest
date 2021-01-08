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

// test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
//   service.randomNumber = jest.fn().mockReturnValue(10);

//   expect(service.randomNumber()).toBe(10);
//   expect(service.randomNumber).toHaveBeenCalled();
//   expect(service.randomNumber).toHaveBeenCalledTimes(1);
// });

describe('verifica as funções e os mocks', () => {
  jest.mock('../src/mockFunctions');

  test('testa função add', () => {
    mockFunctions.add.mockImplementation((a, b) => a + b);
    // mockFunctions.add = jest
    //   .fn()
    //   .mockReturnValueOnce(3)
    //   .mockReturnValueOnce(45)
    //   .mockReturnValueOnce(14)
    //   .mockReturnValueOnce(-175)
    //   .mockReturnValueOnce(33);

    expect(mockFunctions.add(1, 2)).toEqual(3);
    expect(mockFunctions.add).toHaveBeenCalled(1);
    expect(mockFunctions.add).toHaveBeenCalledWidth(1, 2);
    expect(mockFunctions.add(8, 37)).toEqual(45);
    expect(mockFunctions.add).toHaveBeenCalled(2);
    expect(mockFunctions.add).toHaveBeenCalledWidth(8, 37);
    expect(mockFunctions.add(-11, 25)).toEqual(14);
    expect(mockFunctions.add).toHaveBeenCalled(3);
    expect(mockFunctions.add).toHaveBeenCalledWidth(-11, 25);
    expect(mockFunctions.add(13, -188)).toEqual(-175);
    expect(mockFunctions.add).toHaveBeenCalled(4);
    expect(mockFunctions.add).toHaveBeenCalledWidth(13, -188);
    expect(mockFunctions.add(7, 26)).toEqual(33);
    expect(mockFunctions.add).toHaveBeenCalled(5);
    expect(mockFunctions.add).toHaveBeenCalledWidth(7, 26);
  });
  test('testa função subtract', () => {
    // mockFunctions.subtract = jest
    //   .fn()
    //   .mockReturnValueOnce(864)
    //   .mockReturnValueOnce(-350)
    //   .mockReturnValueOnce(-52)
    //   .mockReturnValueOnce(131)
    //   .mockReturnValueOnce(-104);

    expect(mockFunctions.subtract(899, 35)).toEqual(864);
    expect(mockFunctions.subtract(-17, 333)).toEqual(-350);
    expect(mockFunctions.subtract(45, 97)).toEqual(-52);
    expect(mockFunctions.subtract(23, -108)).toEqual(131);
    expect(mockFunctions.subtract(-133, -29)).toEqual(-104);
  });
  test('testa função multiply', () => {
    // mockFunctions.multiply = jest
    //   .fn()
    //   .mockReturnValueOnce(2)
    //   .mockReturnValueOnce(0)
    //   .mockReturnValueOnce(-36)
    //   .mockReturnValueOnce(84)
    //   .mockReturnValueOnce(437);

    expect(mockFunctions.multiply(1, 2)).toEqual(2);
    expect(mockFunctions.multiply(0, 5)).toEqual(0);
    expect(mockFunctions.multiply(-4, 9)).toEqual(-36);
    expect(mockFunctions.multiply(-12, -7)).toEqual(84);
    expect(mockFunctions.multiply(19, 23)).toEqual(437);
  });
  test('testa função divide', () => {
    // mockFunctions.divide = jest
    //   .fn()
    //   .mockReturnValueOnce(13)
    //   .mockReturnValueOnce(-380)
    //   .mockReturnValueOnce(6)
    //   .mockReturnValueOnce(3)
    //   .mockReturnValueOnce(121);

    expect(mockFunctions.divide(169, 13)).toEqual(13);
    expect(mockFunctions.divide(-1900, 5)).toEqual(-380);
    expect(mockFunctions.divide(42, 7)).toEqual(6);
    expect(mockFunctions.divide(729, 243)).toEqual(3);
    expect(mockFunctions.divide(1331, 11)).toEqual(121);
  });
  test('testa função power', () => {
    // mockFunctions.power = jest
    //   .fn()
    //   .mockReturnValueOnce(100)
    //   .mockReturnValueOnce(1024)
    //   .mockReturnValueOnce(3125)
    //   .mockReturnValueOnce(1)
    //   .mockReturnValueOnce(1);

    expect(mockFunctions.power(10, 2)).toEqual(100);
    expect(mockFunctions.power(2, 10)).toEqual(1024);
    expect(mockFunctions.power(5, 5)).toEqual(3125);
    expect(mockFunctions.power(1, 10)).toEqual(1);
    expect(mockFunctions.power(0, 0)).toEqual(1);
  });
  test('testa função factorial', () => {
    // mockFunctions.factorial = jest
    //   .fn()
    //   .mockReturnValueOnce(120)
    //   .mockReturnValueOnce(3628800)
    //   .mockReturnValueOnce(6)
    //   .mockReturnValueOnce(40320)
    //   .mockReturnValueOnce(2);

    expect(mockFunctions.factorial(5)).toEqual(120);
    expect(mockFunctions.factorial(10)).toEqual(3628800);
    expect(mockFunctions.factorial(3)).toEqual(6);
    expect(mockFunctions.factorial(8)).toEqual(40320);
    expect(mockFunctions.factorial(2)).toEqual(2);
  });
});
