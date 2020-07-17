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
    test('Deve somar dois números e retornar o resultado', () => {
        expect(calculator.sum(-20, -5)).toBe(-25);
        expect(calculator.sum(-1, 1)).toBe(0);
        expect(calculator.sum(3, 2)).toBe(5);
    });
});

describe('Quando utilizarmos a operação subtract()', () => {
    test('Deve subtrair o primeiro valor pelo segundo e retornar o resultado', () => {
        expect(calculator.subtract(-10, -3)).toBe(-7);
        expect(calculator.subtract(1, 1)).toBe(0);
        expect(calculator.subtract(100, 83)).toBe(17);
    });
});

describe('Quando utilizarmos a operação multiply()', () => {
    test('Deve multiplicar dois valores e retornar o resultado', () => {
        expect(calculator.multiply(3, -5)).toBe(-15);
        expect(calculator.multiply(0, 2)).toBe(0);
        expect(calculator.multiply(-9, -100)).toBe(900);
    });
});

describe('Quando utilizarmos a operação divide()', () => {
    test('Deve tentar dividir o primeiro valor por zero e retornar uma exceção', () => {
        expect(() => calculator.divide(5, 0)).toThrow();
        expect(() => calculator.divide(0, 0)).toThrow();
        expect(() => calculator.divide(17, 0)).toThrow();
    });

    test('Deve dividir o primeiro valor pelo segundo e retornar o resultado', () => {
        expect(calculator.divide(-15, 5)).toBe(-3);
        expect(calculator.divide(10, -2)).toBe(-5);
        expect(calculator.divide(14, 2)).toBe(7);
    });
});
