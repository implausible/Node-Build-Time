#!/usr/bin/env node
const fs = require('fs');

try {
  const rawContents = fs.readFileSync('package.json', 'utf8');
  const package = JSON.parse(rawContents);
  package.buildTime = new Date().toString();
  fs.writeFileSync('package.json', JSON.stringify(package));
  process.exit(0);
} catch (error) {
  console.error('BuildTime: Unable to write to package.json.');
  process.exit(1);
}
