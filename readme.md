## Installation (via GitHub)
```bash
$git clone https://github.com/samcus/picard-quotes.git
$cd picard-quotes
$npm install
```

## Run Example
```bash
$npm run example
```

## Installation (via NPM)
```bash
$npm install -S picard-quotes
```

## Installation (via Docker)
```bash
$docker pull samcus/picard-quotes 
$docker images
$docker run -i -t samcus/picard-quotes:latest picard-quotes
# Optionally Play with Build
$docker run -i -t samcus/picard-quotes:latest bash
```

## Usage
```js
const picard = require('picard-quotes');
// All Quotes
picard.quotes((quotes) => {
    if (quotes) console.log(quotes);
});
// Random Quote
picard.quote((quote) => {
    if (quote) console.log(quote);
});
// Specific Quote
picard.quote({number: 1}, (quote) => {
    if (quote) console.log(quote);
});
```

## CLI Usage
```bash
$npm i -g picard-quotes
$picard-quotes

# "The line must be drawn here! This far, no farther!" - Jean-Luc Picard

```

## Unit Test
```bash
$npm test
```

## Coverage Test
```bash
# Terminal Report
$npm run coverage
# Terminal Report and Open HTML Report
$npm run coverage-report
```