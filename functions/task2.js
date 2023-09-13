function validate(age) {
    if (age >= 18) {
        console.log("True");
        return;
    }
    console.log("False");
}

validate(15);
validate(25);