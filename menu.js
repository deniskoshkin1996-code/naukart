document.addEventListener('DOMContentLoaded', function() {
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function(){ menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ menu.classList.remove('open'); });
    });
  }
});