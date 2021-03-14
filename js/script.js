/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Created an array with objects to create the qoutes.
const quotes= [ 
  {
  quote:'Be yourself; everyone else is already taken.',
  source:'Albert Einstein',
  tag: 'Self Help'
},
  {
    quote:'So many books, so little time.',
    source:'Frank Zappa',
    citation: 'Good Reads'
  },
  {
    quote:'Be the change that you wish to see in the world.',
    source:'Mahatma Gandhi',
    year:2008
  },
  {
    quote:'If you tell the truth, you do not have to remember anything.',
    source:'Mark Twain'
  },
  {
    quote:'All you need is love. But a little chocolate now and then does not hurt.',
    source:'Charles M. Schulz'
  },
  {
    quote:  'A room without books is like a body without a soul.',
    source:' Marcus Tullius Cicero'
  },
  {
    quote:  'You only live once, but if you do it right, once is enough.',
    source:' Mae West'
  }
];
  

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  for(i=0;i <= quotes.length; i++ ){
    let randomQuote = quotes[i];
    return randomQuote;
  }
}
//  let num = Math.floor(Math.random() *7 ) ; 
// This generates a random quote number.The random number chosen will be used to pick a quote according to index
  // Generates a number from 1-7



/***
 * `printQuote` function
***/

function printQuote() {

 let getQuote = getRandomQuote();

 let htmlPrint = `<p class="quote"> ${getQuote.quote}</p>
<p class="source"> ${getQuote.source}`

if(getQuote.citation){
  htmlPrint +=
  `<span class="citation">${getQuote.citation}</span>`;
}

if(getQuote.year){
  htmlPrint +=
  `<span class="year">${getQuote.year}</span></p>`
}

if(getQuote.tag){
  htmlPrint +=
  `<span class="tag">${getQuote.tag}</span></p>`
}
background();
return document.getElementById('quote-box').innerHTML = htmlPrint;
 
}

// Background Color Change function
const backgroundColors = [ "#D94D30", "#F5E973", "#B0DF29", "#1FC8B3", "#10AFE2", "#4B84F5", "#59338B", "#8619AF", "#BD1274" ];

function background(){
  let bgColor = Math.floor(Math.random()*backgroundColors.length);

 return document.body.style.backgroundColor = backgroundColors[bgColor];
}

// Auto refresh Quotes function
setInterval( () =>{ 
  printQuote(); 
}, 3000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
document.addEventListener("click", background);