'use strict';

function thumbnailValue(){
$('.thumbnail').on('click', e => {
  //console.log(e.target);
  
  let imgSrc = $(this).find('img').attr('src');
  let imgAlt = $(this).find('img').attr('alt');
  
  $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

});

}

$(thumbnailValue);