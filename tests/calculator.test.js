const calculator = require('../src/calculator');

describe('Quando o módulo calculator for importado', () => {
    test('Deve possuir as operações sum(), subtract(), multiply(), divide()', () => {
        expect(calculator).toHaveProperty('sum');
        expect(calculator).toHaveProperty('subtract');
        expect(calculator).toHaveProperty('multiply');
        expect(calculator).toHaveProperty('divide');
    });
});
