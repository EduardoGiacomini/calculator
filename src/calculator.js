class Calculator {
    sum(number1, number2) {
        return number1 + number2;
    }

    subtract(number1, number2) {
        return number1 - number2;
    }

    multiply(number1, number2) {
        return number1 * number2;
    }

    divide(number1, number2) {
        if (number2 === 0) {
            throw new Error('Não é possível realizar divisão por zero');
        }

        return number1 / number2;
    }

    factorial(number) {
        if (number < 0) {
            throw new Error('O fatorial é definido apenas para o conjunto dos números naturais');
        }

        if (number === 0) {
            return 1;
        }

        return number * this.factorial(number - 1);
    }
}

const calculator = new Calculator();

module.exports = calculator;
