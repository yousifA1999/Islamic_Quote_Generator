const quoteContainer = document.getElementById('qoute-container')
const quoteText = document.getElementById('qoute')
const quoteAurhor = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('New-Quote')

// show new quote

function newQuote () {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    quoteAurhor.textContent = quote.author;
    quoteText.textContent = quote.text;





if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')

} else {
    quoteText.classList.remove('long-quote')
}
quoteText.textContent = quote.text;




// tweet
function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAurhor.textContent}`;
    window.open(twitterUrl, '_blank')
}





//event listner
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
}

newQuote();
