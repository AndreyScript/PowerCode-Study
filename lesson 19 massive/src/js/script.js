/*1.*/


function multiplication () {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = 0; i < numbers.length; i++){
        console.log (numbers[i]);
    }
    let newObject = numbers.map(number => number * 2);
    console.log (newObject);
    let value = Array.isArray(newObject);
    console.log(value);
}

multiplication();

/*2.*/

function output (n) {
    let arr = Array.from({length: n});
    let res = [];
    for (let i in arr) {

        i++; // prevent counting from 0

        if (i % 3 === 0 && i % 5 === 0){
            res.push('fizzbuzz');
        } else if(i % 3 === 0){
            res.push('fizz');
        } else if(i % 5 === 0){
            res.push('buzz');
        } else {
            res.push(i);
        }
    }
    return res;
}


let res = output(100);
console.log(res);




