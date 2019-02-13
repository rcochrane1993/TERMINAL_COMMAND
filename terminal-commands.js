const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (input) => {
    fs.writeFile('${input}', '', 'utf8', (err) => {
        if (err) throw err;
      
        console.log('file created')
      });
    }
