const _ = require('lodash');
const quotes = require('./quotes');

// Get Specific or Random Quote
exports.quote = (options, done) => {
    if (!options) throw new Error('Missing required parameters.')
    if (options.number) {
        if (options.number > quotes.length || options.number < 1) {
            throw new Error('Quote number out of range.')
        }
        return done(quotes[options.number - 1]);
    }
    done = options;
    return done(_.sample(quotes));
};

// Get All Quotes
exports.quotes = (done) => {
    if (done) return done(quotes);
    else throw new Error('No callback provided.');
};