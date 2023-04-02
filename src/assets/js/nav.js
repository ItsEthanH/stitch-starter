// mobile menu functionality
function toggleMenu() {
  document.body.classList.toggle('open');
}

// closes the navigation on dark background click
function backgroundClose(event) {
  if (event.target.localName === 'nav') {
    toggleMenu();
  }
}

// listeners
document.getElementsByTagName('nav')[0].addEventListener('click', backgroundClose);
document.getElementById('hamburger').addEventListener('click', toggleMenu);
