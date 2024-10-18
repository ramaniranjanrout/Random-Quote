function generateQuote() {
const quotes = ["The best way to predict the future is to create it.","Success is not the key to happiness. Happiness is the key to success.","Do not watch the clock. Do what it does. Keep going.","Believe you can and you're halfway there.","The only way to do great work is to love what you do."];
let randomIndex = Math.floor(Math.random() * quotes.length);
document.getElementById('quote').innerText = quotes[randomIndex];
}