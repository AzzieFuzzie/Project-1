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

function getRandomQuote() {
 let num = Math.floor(Math.random() * 5 ) + 1;
let randomQoute = qoutes[num];
  return randomQoute;
}


/***
 * `printQuote` function
***/

function printQuote() {
 const getQoute = getRandomQuote();
let Qoute = <p class="quote"> randomQuote.quote</p>
<p class="source"> randomQuote.source

if(qoutes.citation){
  <span class="citation">quote citation</span>
  <span class="year">quote year</span>
</p>
}
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);