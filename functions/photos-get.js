require('dotenv').config();
const Flickr = require('flickr-sdk');
var validator = require('validator');

const flickr = new Flickr(process.env.FLICKR_API_KEY);

const SEARCH_SAFE = 1;
const SEARCH_MODERATE = 2;
const SEARCH_UNFILTERED = 3;

const CONTENT_PHOTOS = 0;

const DefaultBatchSize = 9;

exports.handler = async (event, context) => {
  const countPhotosAvailableForKeywords = async (tagList) => {
    let result = {};

    try {
      result = await flickr.photos.search({
        tags: tagList,
        page: 1,
        per_page: 1,
        safe_search: SEARCH_MODERATE,
        content_types: [CONTENT_PHOTOS],
        sort: 'interestingness-desc',
      });

      return {
        total: result.body.photos.total,
        pages: result.body.photos.pages
      };
    }
    catch (e) {
      throw new Error(e);
    }
  };

  const textValidator = function (str) {
    const whitelistPattern = /^[a-zA-Z0-9 \,\;\.\!\?\"\'\-\(\)\[\]\#\$\£]{1,500}$/i;
    return validator.matches(str, whitelistPattern);
  }

  const imageSizeDecider = function (batchSize) {
    return batchSize === 1 ? "c" : batchSize <= 25 ? "z" : "t";
  }

  var tagList = event.queryStringParameters.keywords.replace(' ', ',');
  var photos = [];

  if (!textValidator(tagList)) {
    return {
      statusCode: 422,
      body: "The keywords must not exceed 500 characters in total and must comprise only English text"
    }
  }

  try {
    const { total, pages } = await countPhotosAvailableForKeywords(tagList);
    const r = (Math.floor(Math.random() * (pages - 2))) % 20;
    const n = event.queryStringParameters.batchSize || DefaultBatchSize;

    const result = await flickr.photos.search({
      tags: tagList,
      page: r,
      per_page: n,
      safe_search: SEARCH_MODERATE,
      content_type: CONTENT_PHOTOS,
      sort: 'interestingness-desc',
    })

    const sizeSuffix = imageSizeDecider(+n);

    for (const k in result.body.photos.photo) {
      if (k) {
        const p = result.body.photos.photo[k];
        photos.push({
          url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}_${sizeSuffix}.jpg`,
          key: p.id,
          owner:
            p.owner,
          id: p.id,
          link: `https://www.flickr.com/photos/${p.owner}/${p.id}`
        });
      }
    };

    return {
      statusCode: 200,
      body: JSON.stringify(photos)
    }
  }
  catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    }
  }
}

