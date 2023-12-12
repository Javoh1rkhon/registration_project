let user;

function getData() {
    user = JSON.parse(localStorage.getItem('user') || "{}")
}

getData() 

const hello = document.querySelector('.hello')

hello.innerHTML = `Hello ${user.name} ${user.surname} `