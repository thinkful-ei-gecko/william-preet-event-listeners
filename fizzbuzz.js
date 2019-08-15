'use strict';

function fizzbuzz(num) {
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  return num;
}
// console.log(fizzbuzz(15));

function generateFizzHtml(fizzResult) {
  let fizzClass = '';
  if (typeof fizzResult === 'string') {
    fizzClass = fizzResult;
  }
  return `
    <div class='fizz-buzz-item ${fizzClass}'>
        <span>${fizzResult}</span>
    </div>
  `;
}
// console.log(generateFizzHtml('fizzbuzz'));

function handleSubmit(){
  $('#number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for (let i = 1; i <= countTo; i++) {
      fizzBuzzResults.push(fizzbuzz(i));
    }
    // console.log(fizzBuzzResults);
    // Produces an array of template strings
    const htmlArray = fizzBuzzResults.map(result => generateFizzHtml(result));
    // console.log(html);
    $('.js-results').html(htmlArray);
  });
}

$(handleSubmit);

//when we handle form elements, WE USE THE CLASS OR ID...NOT THE submit?
// default action for forms is to reload page or go to end server point
//event in event => is AUTOMATUCALLY mapped to event to its left...in this example, 'submit'
//.val whatever number is entered, it will grab the value of it

// when building stuff out separate things INTO separate functions in pseudo
// write what you want those functions to do, then start coding