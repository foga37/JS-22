console.log('3. Створіть HTML сторінку, яка записує дату останнього входу користувача у localStorage. При повторному відвідуванні сторінки показуйте дату попереднього входу та оновлюйте її.');
let llogin = localStorage.getItem('llogin');
if(llogin) {
    console.log('Оновленна дата:(localStoroge)');
} else {
    console.log('Перший вхід:');
}
let date = new Date().toLocaleString();
localStorage.setItem('llogin', date);
console.log('4. Створіть список завдань (to-do list масив з полями title, date, describe, isDone),який зберігається в localStorage у форматі JSON.Створіть фунції які зможуть: додавати, видаляти й відмічати завдання як виконані.');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function addTask(title, describe) {
    if (!title || !describe) {
        return;
    }
    const newTask = {
        title: title,
        date: new Date().toLocaleString(),
        describe: describe,
        isDone: false
    };
    tasks.push(newTask);
    saveTasks(); 
}
function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        return;
    }
    tasks.splice(index, 1); 
    saveTasks(); 
}
function toggleTaskStatus(index) {
    if (index < 0 || index >= tasks.length) {
        return;
    }
    tasks[index].isDone = !tasks[index].isDone; 
    saveTasks(); 
}
addTask('Перевірити пошту', 'Перевірити нові листи та відповісти на важливі.');
addTask('Піти на пробіжку', 'Пробіжка в парку на 5 км.');
toggleTaskStatus(0); 
deleteTask(1); 
console.log('localStorage');

console.log('5. Реалізуйте таймер сесії, який показує, скільки часу користувач провів на сторінці. Час початку сесії зберігайте у sessionStorage, і при оновленні сторінки він має продовжувати відлік.');
let time = sessionStorage.getItem('time');
if(!time) {
    time = new Date().getTime();
    sessionStorage.setItem('time', time);
}
function uppTime() {
    const currTime = new Date().getTime();
    const spend = currTime - time;
    const sec = Math.floor((spend / 1000) % 60);
    const min = Math.floor((spend / 1000 / 60) % 60);
    const hour = Math.floor((spend / (1000 * 60 * 60)) / 24);
    const format = `${hour} год ${min} хв ${sec} сек`;
    sessionStorage.setItem('spend', format);
}
setInterval(uppTime, 1000) 
console.log('час в sessionStorage');


