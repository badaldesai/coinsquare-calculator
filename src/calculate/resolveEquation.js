import { isNumber, isOperator, OPERATOR } from './helper';

export function resolveEquation(outputQueue) {
    const result = [];
    while(outputQueue.length) {
        const element = outputQueue.shift();
        if(isNumber(element)) {
            result.push(parseFloat(element));
            continue;
        }
        if(isOperator(element)) {
            const num1 = result.pop();
            const num2 = result.pop();
            const solve = OPERATOR[element](num2, num1);
            result.push(solve);
        }
    }
    if(result.length !== 1) {
        throw new Error('Wrong Expression.');
    }
    return result[0].toString();
}