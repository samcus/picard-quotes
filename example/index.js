const picard = require('../lib');

picard.quotes((quotes) => {
    if (quotes) console.log(quotes);
});

picard.quote((quote) => {
    if (quote) console.log(quote);
});

picard.quote({number: 1}, (quote) => {
    if (quote) console.log(quote);
});