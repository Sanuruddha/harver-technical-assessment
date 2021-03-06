const minimist = require('minimist');
const { catService, fileService, imageService } = require('./services')
const { to } = require('./utils');

const {
  greeting = 'Hello',
  who = 'You',
  width = 400,
  height = 500,
  color = 'Pink',
  size = 100,
} = minimist(process.argv.slice(2));

(async function app() {
  const image1Params = { width, height, color, size, phrase: greeting };
  const image2Params = { width, height, color, size, phrase: who };

  const promises = [
    to(catService.getCatWithPhrase({ ...image1Params })),
    to(catService.getCatWithPhrase({ ...image2Params }))
  ];

  const [image1res, image2res] = await Promise.all(promises);

  const [err1, image1Body] = image1res;
  if (err1) {
    console.log(err1);
    return;
  }

  const [err2, image2Body] = image2res;
  if (err2) {
    console.log(err2);
    return;
  }

  const [errImageBlend, data] = await to(imageService.blendImages([image1Body, image2Body], width, height));
  if (errImageBlend) {
    console.log(errImageBlend);
    return;
  }

  const [errorFileWrite] = await to(fileService.writeImageToFile(data));
  if (errorFileWrite) {
    console.log(errorFileWrite);
  } else {
    console.log('The file was saved!');
  }
})();

