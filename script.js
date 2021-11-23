// program to print prime numbers between the two numbers

// take input from the user
//const lowerNumber = parseInt(prompt('Enter lower number: '));
//const higherNumber = parseInt(prompt('Enter higher number: '));

console.log(`The prime numbers between ${1} and ${200} are:`);

// looping from lowerNumber to higherNumber
for (let i = 1; i <= 200; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}