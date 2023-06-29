// Function to generate a random quote from the API
function generateQuote() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://type.fit/api/quotes", true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        var quotes = JSON.parse(xhr.responseText);
        var randomNumber = Math.floor(Math.random() * quotes.length);
        var quoteElement = document.getElementById("quote");
        quoteElement.textContent = quotes[randomNumber].text;
      }
    };
    xhr.send();
  }
  
// Function to generate a random quote every 30 seconds
function generateQuoteEvery30Seconds() {
    generateQuote(); // Generate quote initially
  
    // Generate quote every 30 seconds
    setInterval(function() {
      generateQuote();
    }, 30000);
  }
  
  // Start generating quotes
  generateQuoteEvery30Seconds();

  // Generate quote initially
generateQuote();

// Generate quote on button click
var generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);