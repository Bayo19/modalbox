let modalBtn = document.querySelector('.btn')
let modalBg = document.querySelector('.modal-bg')
let modalClose = document.querySelector('.modal-close')

let header = document.querySelector('.header')

modalBtn.addEventListener('click', function() {
    modalBg.classList.add('bg-active')
    let col = getComputedStyle(modalBtn)
    header.style.color = col.backgroundColor
})

modalClose.addEventListener('click', function() {
    modalBg.classList.remove('bg-active')
})