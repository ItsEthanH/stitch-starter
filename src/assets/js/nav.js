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

// changes the nav background on when a user scrolls > 0px
// this one is optional - feel free to delete this and the corrosponding .styled classes
function changeNavBackground() {
  const header = document.getElementsByTagName('header')[0];

  if (window.scrollY !== 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}

document.addEventListener('scroll', changeNavBackground);
