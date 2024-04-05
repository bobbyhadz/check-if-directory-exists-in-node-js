// How to check if a Directory exists in Node.js

import fs from 'fs';

// 👇️ if you use CommonJS
// const fs = require('fs')

const directoryPath = './my-folder';

if (fs.existsSync(directoryPath)) {
  console.log('The directory exists');
} else {
  console.log('The directory does NOT exist');
}
