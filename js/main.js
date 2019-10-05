'use strict';

(function() {
  
  var burgerMenu = document.querySelector('.burger-menu');
  var nav = document.querySelector('.nav');

  burgerMenu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });

})();