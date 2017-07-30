#!/usr/bin/env node
const picard = require('../lib');
const program = require('commander');
const colog = require('colog');

program
    .version('0.0.1')
    .description('Quotes from the Legendary Jean-Luc Picard')
    .parse(process.argv);

picard.quote((quote) => {
    if (quote) return console.log(colog.yellow(`\n"${quote.quote}" `) + colog.blue(`- Jean-Luc Picard\n`));
});
