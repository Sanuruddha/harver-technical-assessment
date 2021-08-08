let { writeFile } = require('fs');
let { join } = require('path');

const writeImageToFile = async (data) => {
  return new Promise((resolve, reject) => {
    const fileOut = join(process.cwd(), `/cat-card.jpg`);
    writeFile(fileOut, data, 'binary', (err) => {
      if(err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  writeImageToFile,
};