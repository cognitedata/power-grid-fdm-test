const YAML = require('yaml');
const fs = require('fs');

const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

const inputFile = fs.readFileSync(inputFilePath, 'utf-8');
const parsed = YAML.parse(inputFile);
fs.writeFileSync(outputFilePath, JSON.stringify(parsed), 'utf-8');
