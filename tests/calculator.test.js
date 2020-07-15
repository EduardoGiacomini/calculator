const calculator = require('../src/calculator');

describe('Quando o módulo calculator for importado', () => {
    test('Deve possuir as operações sum(), subtract(), multiply(), divide()', () => {
        expect(calculator).toHaveProperty('sum');
        expect(calculator).toHaveProperty('subtract');
        expect(calculator).toHaveProperty('multiply');
        expect(calculator).toHaveProperty('divide');
    });
});

describe('Quando utilizarmos a operação sum()', () => {
    test('Deve somar dois números e retornar os valores corretos', () => {
        expect(calculator.sum(-2, -5)).toBe(-7);
        expect(calculator.sum(-1, -4)).toBe(-5);
        expect(calculator.sum(-2, -1)).toBe(-3);
        expect(calculator.sum(-2, 0)).toBe(-2);
        expect(calculator.sum(-1, 1)).toBe(0);
        expect(calculator.sum(1, 1)).toBe(2);
        expect(calculator.sum(2, 1)).toBe(3);
        expect(calculator.sum(3, 2)).toBe(5);
        expect(calculator.sum(5, 2)).toBe(7);
    });
});

describe('Quando utilizarmos a operação subtract()', () => {
    test('Deve subtrair o primeiro valor pelo segundo e retornar os valores corretos', () => {
        expect(calculator.subtract(-10, -3)).toBe(-7);
        expect(calculator.subtract(-20, -15)).toBe(-5);
        expect(calculator.subtract(10, 13)).toBe(-3);
        expect(calculator.subtract(0, 2)).toBe(-2);
        expect(calculator.subtract(1, 1)).toBe(0);
        expect(calculator.subtract(10, 8)).toBe(2);
        expect(calculator.subtract(100, 97)).toBe(3);
        expect(calculator.subtract(-20, -25)).toBe(5);
        expect(calculator.subtract(0, -7)).toBe(7);
    });
});
