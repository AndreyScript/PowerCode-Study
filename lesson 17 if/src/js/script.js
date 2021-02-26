/*1.*/
let user = prompt('Кто пришел?');


if (user === 'admin') {
    let password = prompt('Ваш пароль?');
    if (password === 'admin') {
        alert('Добро пожаловать!');
    }
    else if (password !== ''){
        alert ('Пароль неверен');
    }
    else {
        alert ('Вход отменен');
    }
}
    else if (user !=='') {
        alert ('Я вас не знаю!')
    }
    else {
        alert ('Вход отменен');
    }

/*2.*/
    for (let a = 0; a < 100; a++) {
    console.log(a);
}

/*Фибоначчи***/
    let a = 0;
    let b = 1;

    for (let i = 1; i <= 25; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(b);
  }


