var foto = ['6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg', '6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg',]
var pos = 0;
var diapCall
var numFoto = []
var closed_ = false
function drawCols() {
  let html_ = ''
  let modal = ''
  let fotoCount = 0
  let col = 0

  structure();

  for(var i = 0; i < type.length; i++){
    if(i%7 == 0 && i != 0){
      $('.box')[col].innerHTML = html_
      col++;
      html_ = ""
    }

    if(cels[type[i]].match(/elemfoto/)){
      numFoto.push(i)
      html_ += drawFotoCel(cels[type[i]], masa[i], ion[i], electro[i], numero[i], simbol[i], name[i], fotoCount, i)
      modal += createModal(fotoCount, i)
        fotoCount++;
    } else {
      html_ +=  drawCel(cels[type[i]], masa[i], ion[i], electro[i], numero[i], simbol[i], name[i])
    }
  }
  $('.box')[col].innerHTML = html_
  $('.modal-l')[0].innerHTML = modal

  for(var i = 0; i< $('.modal-img').length; i++){
    $('.modal-img')[i].innerHTML = '<img class="foto" src="'+foto[i]+'"></img>'
  }
}

function structure(){
  let col = 0
  let html_ = ''
  for(var i = 0; i < 18; i++){
    if(i == 9){
      $('.contain')[col].innerHTML = html_
      col++;
      html_ = ""
    }
    html_ += "<div class='col-sm box c"+(i+1)+"'></div>"
  }
  $('.contain')[col].innerHTML = html_
}

function drawCel(typ, ma, io, elec, num, sim, n){
  return '<div class="'+typ+'">'+
            '<div class="row elem">'+
              '<div class="col-sm-7 elem">'+
                '<div class="masa-atomica">'+ma+'</div>'+
                '<div class="ionizacion elem row">'+
                  '<div class="col-sm celem a">'+io+'</div>'+
                  '<div class="col-sm celem b" align="right">'+elec+'</div>'+
                '</div>'+
              '</div>'+
              '<div class="col-sm-4 num-atomico" align="right">'+num+'</div>'+
            '</div>'+
            '<div class="simbol col-sm" align="center">'+sim+'</div>'+
            '<div class="name col-sm" align="center">'+n+'</div>'+
          '</div>'
}

function drawFotoCel(typ, ma, io, elec, num, sim, n, fotoC, i){

  return '<div class="'+typ+' foto'+fotoC+'" onclick="animateOn('+fotoC+', '+i+')">'+
          '<div class="row elem">'+
            '<div class="col-sm-7 elem">'+
              '<div class="masa-atomica">'+ma+'</div>'+
              '<div class="ionizacion elem row">'+
                '<div class="col-sm celem a">'+io+'</div>'+
                '<div class="col-sm celem b" align="right">'+elec+'</div>'+
              '</div>'+
            '</div>'+
            '<div class="col-sm-4 num-atomico" align="right">'+num+'</div>'+
          '</div>'+
          '<div class="simbol col-sm" align="center">'+sim+'</div>'+
          '<div class="name col-sm" align="center">'+n+'</div>'+
          '</div>'
}

function createModal(fotoC, elem){
  let next = fotoC+1
  let prev = fotoC-1
  if(fotoC == 0) prev = foto.length -1
  if(fotoC == foto.length -1) next = 0
  return '<div class="modal fade fotoModal" id="foto-'+fotoC+'" tabindex="-1" role="dialog" aria-labelledby="foto '+fotoC+'" aria-hidden="true">'+
            '<div class="modal-dialog mymodal" role="document">'+
              '<div class="modal-content mymodal">'+
                '<div class="modal-body modal-img" align="center">'+
                '</div>'+
                '<div class="modal-footer">'+
                  '<button type="button" class="nobut" onClick="transition('+fotoC+','+ prev+', '+numFoto[prev]+')"><i class="fas fa-backward"></i></button>'+
                  '<button type="button" class="nobut" onClick="transition('+fotoC+','+ next+', '+numFoto[next]+')"><i class="fas fa-forward"></i></button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';
}



function closeDiapo(){
  closed_ = true
  console.log(closed_)
  console.log("closed turn")
  music.pause()
  music.load()
  pos = 0
  $('#diapo').modal('hide');
  $('.animationOut').removeClass("animationOn animationOut")
  $('.animationOn').removeClass("tss")
  $('#elemAnimation')[0].innerHTML = ""
  clearInterval(diapCall);
  console.log('here')
  console.log(closed_)
}

function animateOn(num, elem){
  $('.animationOut').removeClass("animationOn animationOut")
  $('#elemAnimation')[0].innerHTML = drawCel('animationOn animed '+cels[type[elem]].split(" ")[0], masa[elem], ion[elem], electro[elem], numero[elem], simbol[elem], name[elem])
  setTimeout(() => {
    $('#foto-'+num).modal('toggle');
  }, 1500);
  setTimeout(() => {
    $('.animationOn').addClass("tss")
  }, 2000);
}

function animateOut(){
    $('.animationOn').removeClass("tss")
    setTimeout(() => {
      $('#elemAnimation')[0].innerHTML = ""
    }, 2000);
}

function transition(now, next, elem){
  $('#foto-'+now).modal('toggle');
    setTimeout(() => {
    animateOn(next, numFoto[next])
  }, 2500);

}

function playDiapo(){
  closed_ = false
  music.play()
  $('.diapositivas')[0].innerHTML = '<h1 class="initTitle">ALEGRIA</h1>'
  setTimeout(() => {closeDiapo()
  console.log('end')}, 262000);
  setTimeout(() => {
    if(!closed_){
      $('#diapo').modal('toggle');
      playAnimateOn(pos, numFoto[pos])
      diapCall = setInterval(function(){
        console.log(closed_)
        if(closed_) clearInterval(diapCall)
        else {
          playTransition(pos, pos+1, numFoto[pos+1])
        }

      }, 7000);
    } else {
      clearInterval(diapCall)
    }
  }, 7000);
}

function nextImg(){
  if(pos < foto.length){
    $('.diapositivas')[0].innerHTML = '<img class="diapofoto" src="'+foto[pos%foto.length]+'"></img>'
    pos++;
  }
}

function playAnimateOn(num, elem){
  $('.animationOut').removeClass("animationOn animationOut")
  if(!closed_){
    $('#elemAnimation')[0].innerHTML = drawCel('animationOn animed '+cels[type[elem]].split(" ")[0], masa[elem], ion[elem], electro[elem], numero[elem], simbol[elem], name[elem])
    setTimeout(() => {
      nextImg()
    }, 1000);
    setTimeout(() => {
      $('#diapo').modal('toggle');
    }, 1500);
    setTimeout(() => {
      $('.animationOn').addClass("tss")
    }, 2000);
  }
}

function playAnimateOut(){
    $('.animationOn').removeClass("tss")
    setTimeout(() => {
      $('#elemAnimation')[0].innerHTML = ""
    }, 1900);
}

function playTransition(now, next, elem){
    playAnimateOut()
    $('#diapo').modal('toggle');
    setTimeout(() => {
    playAnimateOn(next, numFoto[next])
  }, 2500);

}

drawCols();
