const { to, requestPromise } = require('../utils');

const CAT_SERVICE_URL = 'https://cataas.com';

const CAT_WITH_PHRASE_PATH = 'cat/says';

const getCatWithPhrase = async ({ width, height, color, size, phrase }) => {
  const [err, res] = await to(requestPromise({
    url: `${CAT_SERVICE_URL}/${CAT_WITH_PHRASE_PATH}/${phrase}`,
    method: 'GET',
    qs: {
      width, height, color, size
    },
    encoding: 'binary',
  }));
  if (err) {
    throw err;
  } else {
    console.log('Received response with status:' + res.statusCode);
    return res.body;
  }
};

module.exports = {
  getCatWithPhrase,
};
