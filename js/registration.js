const firstBtn = document.querySelector('.firstBtn')
const form = document.forms.login
const inp = document.querySelectorAll('#inp')

let txt = ''

for (let i = 0; i < inp.length; i++) {
    inp[i].addEventListener('keyup', (e) => {
        txt = e.target.value
    
        console.log(txt);
    })
    
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    localStorage.setItem('user', JSON.stringify(user))

    location.href = '/html/login.html'
})



firstBtn.addEventListener('click', () => {
    console.log('click');
})