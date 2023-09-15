function divide(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error('Всі аргументи мають бути числами!');
        }

        if (denominator === 0) {
            throw new Error('denominator не може дорівнювати 0!');
        }

        const result = numerator / denominator;
        return result;
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        console.log('Робота завершена!');
    }
}

console.log(divide(10, 2));
console.log(divide(1, 0));
console.log(divide('a', 1));
