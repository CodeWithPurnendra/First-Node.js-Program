const { add } = require('./mathUtils');
const { subtract } = require('./mathUtils');
const { multiply } = require('./mathUtils');
const { divide } = require('./mathUtils');

const path = require('path');
const fs = require('fs')
const filePath = path.join(__dirname, "logs", "calculation.txt");

const result1 = add(44,67);
const result2 = subtract(44,67);
const result3 = multiply(12,9);
const result4 = divide(120,34);

fs.writeFileSync(filePath,`Results: ${result1}\n ${result2}\n ${result3}\n ${result4}`);