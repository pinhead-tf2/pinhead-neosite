$(document).ready(function(){
    const quotes = ["🏳️‍⚧️ rights", "hi computer nerds", "we stay silly", "door stuck", "go go gadget gamer time",
        "karl would approve of this", "rock and stone", "praise ralsei", "diggy diggy hole", "the cyber grind",
        "🫵🤨🏳️‍🌈?", "poot dispenser here", "that spy's a bloody medic", "medic", "google en passant", "holy hell"
    ];
    const quoteLabel = document.getElementById("random-quote");
    quoteLabel.innerHTML = quotes[quotes.length*Math.random() | 0];
});