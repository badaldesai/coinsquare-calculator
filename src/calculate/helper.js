export const OPERATOR = {
    '+': (num1, num2) => num1 + num2,
    '-': (num1, num2) => num1 - num2,
    '*': (num1, num2) => num1 * num2,
    '/': (num1, num2) => num1 / num2,
}

export function isOperator (token) {
    return OPERATOR.hasOwnProperty(token);
}

export function isNumber (token) {
    return !isNaN(token);
}

export function getPriority (operator) {
    if (operator === '+' || operator === '-') return 1
    if (operator === '*' || operator === '/') return 2
    return 0
  }