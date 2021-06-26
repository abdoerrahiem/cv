const modal = document.querySelector('.modal')
const image = document.querySelector('.header__image')
const closeModal = document.querySelector('.modal__close')
const splash = document.querySelector('.splash')

image.addEventListener('click', () => {
  modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    splash.style.display = 'none'
  }, 2500)
})
