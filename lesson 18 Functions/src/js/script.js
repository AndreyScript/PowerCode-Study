/*1.*/

let str = prompt('Как вас зовут?');

function usFirst() {
    if (!str || 0 === str.length) {
        return 'Поле ввода осталось пустым!';
    }
    else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

alert (usFirst());

/*2.*/

let a = parseInt(prompt('Введите первое число:'));
let b = parseInt(prompt('Введите второе число:'));

function max (){                                  /*return (Math.max (a, b));????*/
    if (a > b){
        return a;
    }
    else if (b > a){
        return b;
    }
    else {
        return a || b;
    }
}

alert('Большее из чисел: ' + max());

