import { isNumber, isOperator, OPERATOR } from './helper';

export function resolveEquation(outputQueue) {
    const result = [];
    console.log(outputQueue);
    while(outputQueue.length) {
        const element = outputQueue.shift();
        if(isNumber(element)) {
            result.push(parseFloat(element));
            continue;
        }
        if(isOperator(element)) {
            const num1 = result.pop();
            const num2 = result.pop();
            console.log(num2);
            const solve = OPERATOR[element](num2, num1);
            result.push(solve);
        }
    }
    if(result.length !== 1) {
        throw new Error('Something went wrong.');
    }
    return result[0].toString();
}