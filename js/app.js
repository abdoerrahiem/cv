const modal = document.querySelector('.modal')
const image = document.querySelector('.header__image')
const closeModal = document.querySelector('.modal__close')

image.addEventListener('click', () => {
  modal.style.display = 'block'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})
