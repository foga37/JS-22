console.log('*Має бути 2 html сторіки та 2 js файлика');
console.log('1. Створіть HTML сторінку, яка відображає, скільки разів користувач її відвідував. Використовуйте localStorage для збереження кількості відвідувань.');
let visite = localStorage.getItem('visite');
if(visite === null) {
    visite = 0;
} else {
    visite === parseInt(visite);
} 
visite ++;
localStorage.setItem('visite', visite);
console.log('Відвідування сторінки разів:', visite);
console.log('2. Реалізуйте просту форму входу (2 prompt), де користувач вводить імя та пароль.Після входу імя користувача зберігається у sessionStorage. На іншій вкладці перевіряйте, чи користувач увійшов (при завантаженні сторінки), і виводьте повідомлення: "Привіт, [Імя користувача]".');
let login = sessionStorage.getItem('login');
if(login) {
    console.log('Привіт', login);
} else {
    let names = prompt('Введіть імя');
    let password = prompt('Введіть пароль');
 if(names && password) {
    sessionStorage.setItem('login', names);
    console.log('Успіх');
} else {
    console.log('Помилка');
}
}
console.log('3. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці. Час початку сесії зберігайте у cookie при оновленні сторінки він має продовжувати відлік.');
console.log('Так і не розібрався нажаль з цим завданням, через джіпіті не хотів робити, він там пише код що не проходили ще, та і не дуже зрозумів я його, тупо копипастити сенсу не бачу, якщо у вас буде час, в коментарі под дз покажіть як зробити це завдання');
