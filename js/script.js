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
const qoutes= [ 
  {
  qoute:'Be yourself; everyone else is already taken.',
  source:'Albert Einstein'
},
  {
    qoute:'So many books, so little time.',
    source:'Frank Zappa',
    citation: 'Good Reads'
  },
  {
    qoute:'Be the change that you wish to see in the world.',
    source:'Mahatma Gandhi',
    year:'2008'
  },
  {
    qoute:'If you tell the truth, you do not have to remember anything.',
    source:'Mark Twain'
  },
  {
    qoute:'All you need is love. But a little chocolate now and then does not hurt.',
    source:'Charles M. Schulz'
  }
];
  

/***
 * `getRandomQuote` function
***/
// This generates a random quote number.The random number chosen will be used to pick a quote according to index
function getRandomQoute() {
  // Generates a number from 1-6
 let num = Math.floor(Math.random() * 5 ) + 1; 
let randomQoute = qoutes[num];
  return randomQoute;
}


/***
 * `printQuote` function
***/

function printQuote() {

 let getQoute = getRandomQoute();

 let htmlPrint = `<p class="quote"> ${getQoute.qoute}</p>
<p class="source"> ${getQoute.source}`

if(getQoute.citation){
  htmlPrint +=
  `<span class="citation">$(getQoute.citation)</span>`;
}

if(getQoute.year){
  htmlPrint +=
  `<span class="year">$(getQoute.year)</span></p>`
}
return document.getElementById('quote-box').innerHTML = htmlPrint;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);