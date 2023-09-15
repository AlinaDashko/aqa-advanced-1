function countdown(num) {
    console.log(num);
    if (num > 1) {
        countdown(num - 1);
    }
}
countdown(5);