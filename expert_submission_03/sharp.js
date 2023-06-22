const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dirTarget = path.resolve(__dirname, 'src/public/images/heros');
const dirDestination = path.resolve(__dirname, 'dist/images');

// create dir if not exist
if (!fs.existsSync(dirDestination)) {
  console.log('create destination : ', dirDestination);
  fs.mkdirSync(dirDestination, {recursive: true});
}

fs.readdirSync(dirTarget).forEach((image) =>{
  sharp(`${dirTarget}/${image}`).resize(1000)
      .toFile(path.resolve(__dirname,
          `${dirDestination}/${image.split('.')
              .slice(0, -1).join('.')}-large.jpg`),
      );
  sharp(`${dirTarget}/${image}`).resize(800)
      .toFile(path.resolve(__dirname,
          `${dirDestination}/${image.split('.')
              .slice(0, -1).join('.')}-medium.jpg`),
      );
  sharp(`${dirTarget}/${image}`).resize(480)
      .toFile(path.resolve(__dirname,
          `${dirDestination}/${image.split('.')
              .slice(0, -1).join('.')}-small.jpg`),
      );
});
