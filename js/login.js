let user;

function getData() {
    user = JSON.parse(localStorage.getItem('user') || "{}")
}

const gmail = document.querySelector('#email')
const parol = document.querySelector('#password')
const form = document.forms.login

let email = '';

gmail.addEventListener('keyup', (e) => {
    email = e.target.value

    console.log(email);
})

let password = '';

parol.addEventListener('keyup', (e) => {
    password = e.target.value

    console.log(password);
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let log = {}
    if (user.email === email && user.parol === password) {
        location.href = '/html/about.html'
    } else {
        alert('xato')
    }
})

getData()

console.log(user);