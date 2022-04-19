function reverseString1(inputString) {
    let reversedString = '';
    for (let i=inputString.length-1; i>=0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}


function reverseString2(inputString) {
    let reversedString = inputString;
    let middle = Math.floor(inputString.length/2) - 1;
    for (let i=0; i<=middle; i++) {
        reversedString = reversedString.substring(0, i) + reversedString[reversedString.length - 1 - i] +
                         reversedString.substring(i+1, reversedString.length - 1 - i) + reversedString[i] +
                         reversedString.substring(reversedString.length - i);
    }
    return reversedString;
}


function reverseString3(inputString) {
    return inputString.split("").reverse().join("");
}


function reverseString4(inputString) {
    if (inputString.length == 0) {
        return "";
    }
    return inputString[inputString.length-1] + reverseString4(inputString.substring(0, inputString.length - 1));
}


function reverseString5(inputString) {
    let reversedString = '';
    for (let i in inputString) {
        reversedString += inputString[inputString.length - 1 - i];
    }
    return reversedString;
}


function reverseString6(inputString) {
    let reversedString = '';
    for (let char of inputString) {
        reversedString = char + reversedString;
    }
    return reversedString;
}


function reverseString7(inputString) {
    let reversedString = '';
    inputString.split("").forEach(element => {
        reversedString = element + reversedString;
    });
    return reversedString;
}


function reverseString8(inputString) {
    let reversedString = inputString;
    let middle = Math.floor(inputString.length/2) - 1;
    let x = inputString.substring(0, middle+1);
    for (let i in x) {
        reversedString = reversedString.substring(0, parseInt(i)) + reversedString[reversedString.length - 1 - parseInt(i)] +
                         reversedString.substring(parseInt(i)+1, reversedString.length - 1 - parseInt(i)) + reversedString[parseInt(i)] +
                         reversedString.substring(reversedString.length - parseInt(i));
    }
    return reversedString;
}


function reverseString9(inputString) {
    let reversedString = inputString;
    let middle = Math.floor(inputString.length/2) - 1;
    let x = inputString.substring(0, middle+1);
    x.split("").forEach((value, i) => {
        reversedString = reversedString.substring(0, parseInt(i)) + reversedString[reversedString.length - 1 - parseInt(i)] +
                         reversedString.substring(parseInt(i)+1, reversedString.length - 1 - parseInt(i)) + value +
                         reversedString.substring(reversedString.length - parseInt(i));
    });
    return reversedString;
}


console.log(reverseString1('Hello World!'));
console.log(reverseString2('Hello World!'));
console.log(reverseString3('Hello World!'));
console.log(reverseString4('Hello World!'));
console.log(reverseString5('Hello World!'));
console.log(reverseString6('Hello World!'));
console.log(reverseString7('Hello World!'));
console.log(reverseString8('Hello World!'));
console.log(reverseString9('Hello World!'));
