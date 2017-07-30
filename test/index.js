const test = require('tape');
const picard = require('../lib');

test('It returns an object', (assert) => {
    assert.equal(typeof(picard),"object","module returns an object");
    assert.end();
});

test('It has a quote function', (assert) => {
    assert.equal(typeof(picard.quote),"function","returns an object");
    assert.equal(typeof(picard.quote((quote) => { return quote })),"object","returns an object");
    assert.equal(typeof(picard.quote({ number: 1 }, (quote) => { return quote })),"object","returns an object");
    assert.equal(typeof(picard.quote((quote) => { return quote.quote })),"string","returns an string");
    assert.throws(()=>picard.quote({ number: 1 }),"when missing callback argument");
    assert.throws(()=>picard.quote(),"when no arguments are given");
    assert.throws(()=>(picard.quote({ number: 10000 }, (quote) => { return quote })),"when out of range");
    assert.end();
});

test('It has a quotes function', (assert) => {
    assert.equal(typeof(picard.quotes),"function","returns an object");
    assert.equal(typeof(picard.quotes((quotes) => { return quotes })),"object","returns an object");
    assert.throws(()=>picard.quotes(),"when no arguments are given");
    assert.end();
});