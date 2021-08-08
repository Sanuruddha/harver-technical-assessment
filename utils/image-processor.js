const blend = require('@mapbox/blend');

const blendImageArray = (imageDataArray, width, height) => {
  return new Promise((resolve, reject) => {
    const finalImageDataArray = imageDataArray.map((imageData, index) => {
      return {
        buffer: new Buffer.from(imageData, 'binary'),
        x: width * index,
        y:0,
      };
    });
    const finalWidth = width * finalImageDataArray.length;
    blend(
      finalImageDataArray,
      {
      width: finalWidth,
      height: height,
      format: 'jpeg',
      }, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
  });

};

module.exports = {
  blendImageArray,
};