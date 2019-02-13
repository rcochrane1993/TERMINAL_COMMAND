const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
    const fileName = process.argv.slice(2)
    fs.writeFile('${fileName}', '', 'utf8', (err) => {
        if (err) throw err;
      
        console.log('file created')
      });
    }

    module.exports.mkdir = () => {
        const dirName = process.argv.slice(2);
        fs.mkdir('${dirName}', (err) =>{
            if (err) throw err;

            console.log('directory created')
        });
      };