import { isOperator, getPriority } from './helper';
import { resolveEquation } from './resolveEquation';

export function getSolution(expression) {
    const operatorStack = [];
    const outputQueue = [];
    let number = '';
    for(let token of expression) {
        if(!isOperator(token) && token !== '(' && token !== ')') {
            number += token;
            continue;
        }
        if(number) {
            outputQueue.push(number);
        }
        number = '';
        if(isOperator(token)) {
            if(!operatorStack.length) {
               operatorStack.push(token);
            } else {
                while(getPriority(operatorStack[operatorStack.length-1])>getPriority(token)) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            }
        } else if(token === '(') {
            operatorStack.push(token);
        } else if(token === ')') {
            while(operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                outputQueue.push(operatorStack.pop());
            }
            if(operatorStack[operatorStack.length-1] === '('){
                operatorStack.pop();
            } else {
                throw new Error('Mismatch Parathesis');
            }
        }
    }
    if(number) {
        outputQueue.push(number);
    }
    while(operatorStack.length) {
        const operator = operatorStack.pop();
        if(operator === '(') {
            throw new Error('Mismatch Parathesis');
        }
        outputQueue.push(operator);
    }

    return resolveEquation(outputQueue);
}