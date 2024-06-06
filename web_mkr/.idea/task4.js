// Масив з іменами користувачів
const users = ['Вася', 'Петя', 'Саша', 'Оксана', 'Матвій'];

// Знаходимо елемент списку
const userList = document.getElementById('userList');

// Функція для створення елемента списку та додавання обробника подій
users.forEach(name => {
    const li = document.createElement('li');
    li.textContent = name;
    li.addEventListener('click', () => {
        alert(`Hello, ${name}`);
    });
    userList.appendChild(li);
});
