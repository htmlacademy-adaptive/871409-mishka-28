let modalOpen = document.querySelector('.modal-link')
let modalWindow = document.querySelector('.modal')

function closeModal(modal) {
  modal.classList.remove('modal--open');
}

function openModal(modal) {
  modal.classList.add('modal--open');
}

modalOpen.addEventListener('click', function(event) {
  event.preventDefault();
  openModal(modalWindow)
})

modalWindow.addEventListener('click', function(event) {
  event.preventDefault();
  if(event.target.classList.contains('modal')) {
    closeModal(modalWindow)
  }
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closeModal(modalWindow)
  }
})
