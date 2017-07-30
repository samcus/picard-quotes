const opn = require('opn');
const path = require('path');

const coveragePath = path.resolve(__dirname, '../coverage/lcov-report/index.html');

opn(coveragePath);
