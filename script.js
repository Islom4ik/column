const nav = document.querySelector('.header__nav')
const btn = document.querySelector('.btncol')
const list = document.querySelector('.header__menu')
const cont = document.querySelector('.header__content')


btn.addEventListener('click', () => {
    if (btn.innerHTML == 'open') {
        btn.innerHTML = 'close',
        nav.style.width = '150px',
        nav.style.height = '100%',
        nav.style.position = 'fixed',
        nav.style.flexDirection = 'column',
        list.style.flexDirection = 'column';
    }else {
        btn.innerHTML = 'open',
        nav.removeAttribute('style'),
        list.removeAttribute('style')
    }
})
