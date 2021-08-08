const { to } = require('../utils/await-to')
const { blendImageArray } = require('../utils/image-processor');

const blendImages = async (imagesArray, width, height) => {
  const [err, data] = await to(blendImageArray(imagesArray, width, height));
  if (err) {
    throw err;
  } else {
    return data;
  }
};

module.exports = {
  blendImages,
};