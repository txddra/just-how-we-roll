
/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*******************************************************************
 * METHOD-Y HELPER FUNCTIONS YOUR BACK-END DEV HAS WRITTEN FOR YOU *
 ******************************************************************/


const getRandomNumber = function(max) {
  const rand = Math.random();
  const range = rand * max;
  const result = Math.ceil(range);

  return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

const resultD6 = document.querySelector('#d6-roll')
const resultDD6 = document.querySelector('#double-d6-roll-1')
const resultDD6Jr = document.querySelector('#double-d6-roll-2')
const resultD12 = document.querySelector('#d12-roll')
const resultD20 = document.querySelector('#d20-roll')



const meanForTwoDie = document.querySelector('#doubled-d6-rolls-mean')

const meanForD12 =document.querySelector('#d12-rolls-mean')

const meanForD20 = document.querySelector('d20-rolls-mean')

function mean(num1, num2, num3){
  num1 + num2 / num3
  }
  

/******************
 * BUTTON QUERIES *
 ******************/


/******************
 * CLICK HANDLERS *
 ******************/
const dieClick = function(){
let result = getRandomNumber(6);

sixes.push(result)
resultD6.src = 'images/d6/'+result+'.png'

}

const oneOfDice = function(){
  let oneOf = getRandomNumber(6)
  sixes.push(oneOf)
  resultDD6.src = 'images/d6/'+oneOf+'.png'
  //const meanForD6 = document.querySelector('#d6-rolls-mean')

  function meanForD6(num1, num2, num3){
    sixes.push(num1 + num2 / num3)
    }
    
}

const twoOfDice = function(){
  let twoOf = getRandomNumber(6)
  sixes.push(twoOf)
  resultDD6Jr.src = 'images/d6/'+twoOf+'.png'
}

const twelveClick = function(){
  let ending = getRandomNumber(12);

  sixes.push(ending)
  resultD12.src = 'images/numbers/'+ending+'.png'
}

const twentyClick = function(){
  let product = getRandomNumber(20);

  sixes.push(product);
  resultD20.src = 'images/numbers/'+product+'.png'
}
/*******************
 * EVENT LISTENERS *
 *******************/
function both(){
oneOfDice()
twoOfDice()
}

resultD6.addEventListener('click', dieClick)
resultDD6.addEventListener('click',both)
//resultDD6Jr.addEventListener('click', twoOfDice)
resultD12.addEventListener('click', twelveClick)
resultD20.addEventListener('click', twentyClick)
/****************
 * MATH SECTION *
 ****************/


/********************
* MATH-AREA QUERIES *
********************/
