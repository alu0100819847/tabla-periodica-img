$('#diapo').on('hidden.bs.modal', function (e) {

  //closeDiapo()
  //$('.diapositivas')[0].innerHTML = '<h1 class="initTitle">ALEGRIA</h1>'
  //clearInterval(diapCall);
})


$('.fotoModal').on('hidden.bs.modal', function (e) {
  animateOut()
})


$(document).keyup(function(e) {
     if (e.key === "Escape") {
       closeDiapo()
       closed = true
       console.log('xx')
    }
});
