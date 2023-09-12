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

  // const photos = [{ "url": "https://farm66.staticflickr.com/65535/52830044049_58e71bf57f.jpg", "key": "52830044049", "owner": "57349111@N08", "id": "52830044049", "link": "https://www.flickr.com/photos/57349111@N08/52830044049" }, { "url": "https://farm66.staticflickr.com/65535/52821732065_4e0e2cdf1c.jpg", "key": "52821732065", "owner": "95999386@N04", "id": "52821732065", "link": "https://www.flickr.com/photos/95999386@N04/52821732065" }, { "url": "https://farm66.staticflickr.com/65535/52817922841_d6e28b3e5a.jpg", "key": "52817922841", "owner": "45239009@N04", "id": "52817922841", "link": "https://www.flickr.com/photos/45239009@N04/52817922841" }, { "url": "https://farm66.staticflickr.com/65535/52808052947_59215cf674.jpg", "key": "52808052947", "owner": "137245032@N04", "id": "52808052947", "link": "https://www.flickr.com/photos/137245032@N04/52808052947" }, { "url": "https://farm66.staticflickr.com/65535/52805683304_24a3a89e95.jpg", "key": "52805683304", "owner": "123895834@N08", "id": "52805683304", "link": "https://www.flickr.com/photos/123895834@N08/52805683304" }, { "url": "https://farm66.staticflickr.com/65535/52761670624_68d0a6d0a4.jpg", "key": "52761670624", "owner": "150839674@N04", "id": "52761670624", "link": "https://www.flickr.com/photos/150839674@N04/52761670624" }, { "url": "https://farm66.staticflickr.com/65535/52752731231_b9209dd1cd.jpg", "key": "52752731231", "owner": "138752302@N05", "id": "52752731231", "link": "https://www.flickr.com/photos/138752302@N05/52752731231" }, { "url": "https://farm66.staticflickr.com/65535/52742341634_9723d8966b.jpg", "key": "52742341634", "owner": "168933927@N06", "id": "52742341634", "link": "https://www.flickr.com/photos/168933927@N06/52742341634" }, { "url": "https://farm66.staticflickr.com/65535/52739242051_9996f78479.jpg", "key": "52739242051", "owner": "123895834@N08", "id": "52739242051", "link": "https://www.flickr.com/photos/123895834@N08/52739242051" }];

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
    const r = (Math.floor(Math.random() * (pages - 1))) % 20;
    const result = await flickr.photos.search({
      tags: tagList,
      page: r,
      per_page: event.queryStringParameters.batchSize || DefaultBatchSize,
      safe_search: SEARCH_MODERATE,
      content_type: CONTENT_PHOTOS,
      sort: 'interestingness-desc',
    })

    for (const k in result.body.photos.photo) {
      if (k) {
        const p = result.body.photos.photo[k];
        photos.push({
          url: `https://farm${p.farm}.staticflickr.com/${p.server}/${p.id}_${p.secret}.jpg`,
          key: p.id,
          owner:
            p.owner,
          id: p.id,
          link: `https://www.flickr.com/photos/${p.owner}/${p.id}`
        });
      }
    };

    console.log('the photos: ' + JSON.stringify(photos));
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

