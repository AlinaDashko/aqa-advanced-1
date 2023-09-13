function calculateRectangleArea1(width, height) {
    const area = width * height;
    return area;
}
const calculateRectangleArea2 = function(width, height) {
    const area = width * height;
    return area;
};
const calculateRectangleArea3 = (width, height) => {
    const area = width * height;
    return area;
};

const width = 5;
const height = 10;

const result1 = calculateRectangleArea1(width, height);
console.log(`Площа прямокутника (Function Declaration): ${result1}`);

const result2 = calculateRectangleArea2(width, height);
console.log(`Площа прямокутника (Function Expression): ${result2}`);

const result3 = calculateRectangleArea3(width, height);
console.log(`Площа прямокутника (Arrow Function): ${result3}`);