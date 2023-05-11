let modalOpen = document.querySelector(".popular-product__button")
let modalWindow = document.querySelector(".modal")
let overlay = document.querySelector(".modal__overlay")

modalOpen.addEventListener('click', function(event) {
  event.preventDefault();
  modalWindow.classList.add('modal--open');
  overlay.classList.add('modal__overlay--close');
})

overlay.addEventListener('click', function(event) {
  event.preventDefault();
  modalWindow.classList.remove('modal--open');
  overlay.classList.remove('modal__overlay--close');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalWindow.classList.remove('modal--open');
    overlay.classList.remove('modal__overlay--close');
  }
})

