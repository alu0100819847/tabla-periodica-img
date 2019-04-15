var foto = ['6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg', '6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg',]

for(var i = 0; i< $('.modal-body').length; i++){
  $('.modal-body')[i].innerHTML = '<img class="foto" src="'+foto[i]+'"></img>'
}
