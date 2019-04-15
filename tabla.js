var foto = ['6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg', '6.jpg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpg', '2.jpeg', '4.jpeg', '6.jpg', '2.jpeg', '5.jpg',]
    console.log(cels)
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

    console.log(type[i])
    if(cels[type[i]].match(/elemfoto/)){
      html_ += drawFotoCel(cels[type[i]], masa[i], ion[i], electro[i], numero[i], simbol[i], name[i], fotoCount)
      modal += createModal(fotoCount)
        fotoCount++;
    } else {
      html_ +=  drawCel(cels[type[i]], masa[i], ion[i], electro[i], numero[i], simbol[i], name[i])
    }
  }
  $('.box')[col].innerHTML = html_
  $('.modal-l')[0].innerHTML = modal

  for(var i = 0; i< $('.modal-body').length; i++){
    $('.modal-body')[i].innerHTML = '<img class="foto" src="'+foto[i]+'"></img>'
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

function drawFotoCel(typ, ma, io, elec, num, sim, n, fotoC){
  return '<div class="'+typ+'" data-toggle="modal" data-target="#foto-'+fotoC+'">'+
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

function createModal(fotoC){
  let next = fotoC+1
  let prev = fotoC-1
  if(fotoC == 0) prev = foto.length -1
  if(fotoC == foto.length -1) next = 0
  return '<div class="modal fade" id="foto-'+fotoC+'" tabindex="-1" role="dialog" aria-labelledby="foto '+fotoC+'" aria-hidden="true">'+
            '<div class="modal-dialog mymodal" role="document">'+
              '<div class="modal-content mymodal">'+
                '<div class="modal-body" align="center">'+
                '</div>'+
                '<div class="modal-footer">'+
                  '<button type="button" class="nobut" data-toggle="modal" data-target="#foto-'+prev+'" data-dismiss="modal"><i class="fas fa-backward"></i></button>'+
                  '<button type="button" class="nobut" data-toggle="modal" data-target="#foto-'+next+'" data-dismiss="modal"><i class="fas fa-forward"></i></button>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>';
}

drawCols();
