function calculateIsAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(calculateIsAdult(15));
console.log(calculateIsAdult(25));