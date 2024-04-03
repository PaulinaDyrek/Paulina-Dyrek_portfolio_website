window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;
    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

document.querySelector('.toggle-btn').onclick = function () {
  document.querySelector('.dropdown-menu').classList.toggle('open');
  const isOpen = document
    .querySelector('.dropdown-menu')
    .classList.contains('open');
  if (isOpen) {
    document.querySelector('.toggle-btn').innerHTML =
      '<i class="fas fa-times"></i>';
  } else {
    document.querySelector('.toggle-btn').innerHTML =
      '<i class="fas fa-bars"></i>';
  }
};

// document.querySelector('.dropdown-menu').onclick = function () {
//   document.querySelector('.dropdown-menu.open').classList.toggle('close');
//   const isClose = document
//     .querySelector('.dropdown-menu.open.close')
//     .classList.contains('close');
//   if (isClose) {
//     document.querySelector('.toggle-btn').innerHTML =
//       '<i class="fas fa-bars"></i>';
//     document.querySelector('.dropdown-menu').classList.toggle('open');
//   }
// };
