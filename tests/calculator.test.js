const calculator = require('../src/calculator');

describe('Quando o módulo calculator for importado', () => {
    test('Deve possuir as operações sum(), subtract(), multiply(), divide()', () => {
        expect(calculator).toHaveProperty('sum');
        expect(calculator).toHaveProperty('subtract');
        expect(calculator).toHaveProperty('multiply');
        expect(calculator).toHaveProperty('divide');
    });
});

describe('Quando utilizarmos a operação de soma()', () => {
    test('Deve somar dois números e retornar os valores corretos', () => {
        expect(calculator.sum(1, 1)).toBe(2);
        expect(calculator.sum(2, 1)).toBe(3);
        expect(calculator.sum(3, 2)).toBe(5);
        expect(calculator.sum(5, 2)).toBe(7);
        expect(calculator.sum(1, 10)).toBe(11);
        expect(calculator.sum(6, 7)).toBe(13);
    });
});
