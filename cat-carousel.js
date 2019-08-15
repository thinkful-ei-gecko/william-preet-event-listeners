'use strict';

function thumbnailValue(){
  $('.thumbnail').on('click', e => {
  //console.log(e.target);
  
    let imgSrc = $(e.currentTarget).find('img').attr('src');
    let imgAlt = $(e.currentTarget).find('img').attr('alt');

    $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});

  });

}

$(thumbnailValue);