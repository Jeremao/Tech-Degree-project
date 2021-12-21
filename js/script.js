
const quotes = [ // Array of objects
{
  quote: 'A journey of a thousand miles begins with a single step.',
  source: 'Lao Tzu',
  citation: 'Dao De Jing'
},
{
  quote: 'Religion is excellent stuff for keeping common people quiet. Religion is what keeps the poor from murdering the rich.',
  source: 'Napoleon Bonaparte',
  citation: 'Meeting of the National Committee',
  year: 1806
},
{
  quote: 'Im Batman.',
  source: 'Batman'
},
{
  quote: 'The philosophers have only interpreted the world, in various ways. The point, however, is to change it.',
  source: 'Karl Marx',
  citation: 'Eleven Theses on Feuerbach',
  year: 1888
},
{
  quote: 'Those who dare to fail miserably can achieve greatly.',
  source: 'John F. Kennedy',
  citation: 'University of Capetown, Capetown, South Africa',
  year: 1966
},
{
  quote: 'Life is like a box of chocolates. You never know what you’re going to get.',
  source: 'Forest Gump',
  year: 1994
}
];

//Gets a random number along the length of the quote array

function getRandomQuote (arr) {
let randomQuote = Math.floor(Math.random() * arr.length);
 return arr[randomQuote];
}

/*
Takes quote
If there is a citation or year the quote will add to the html
*/

function printQuote () {
  let words = getRandomQuote(quotes);
  let html = `<p class="quote"> ${words.quote} </p>`;
  html += `<p class="source"> ${words.source} </p>`;
  
if("citation" in words) {
html += `<span class="citation"> ${words.citation} </span>`;
}

if("year" in words) {
  html += `<span class="year"> ${words.year} </span></p>`;
} else {}
   document.getElementById('quote-box').innerHTML = html;
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);