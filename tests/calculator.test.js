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
    test('Deve somar dois números e retornar o valor correto', () => {
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
    test('Deve subtrair o primeiro valor pelo segundo e retornar o valore correto', () => {
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

describe('Quando utilizarmos a operação multiply()', () => {
    test('Deve multiplicar dois valores e retornar o valore correto', () => {
        expect(calculator.multiply(3, -5)).toBe(-15);
        expect(calculator.multiply(-1, 5)).toBe(-5);
        expect(calculator.multiply(-2, 2)).toBe(-4);
        expect(calculator.multiply(0, 2)).toBe(0);
        expect(calculator.multiply(1, 1)).toBe(1);
        expect(calculator.multiply(2, 5)).toBe(10);
        expect(calculator.multiply(10, 10)).toBe(100);
        expect(calculator.multiply(-9, -100)).toBe(900);
        expect(calculator.multiply(-7, -3)).toBe(21);
    });
});
