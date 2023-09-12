const keyword_extractor = require("keyword-extractor");
var validator = require('validator');

const textValidator = function (str) {
  const whitelistPattern = /^[a-zA-Z0-9 \,\;\.\!\?\"\'\-\(\)\[\]\#\$\£]{1,500}$/i;
  return validator.matches(str, whitelistPattern);
}

exports.handler = async (event, context) => {
  const lyric = event.queryStringParameters.lyric;

  var keywords;

  try {
    if (!textValidator(lyric)) {
      throw new Error({ statusCode: 422, message: "The lyric must be 500 characters or less and contain only English text" })
    } else {
      const extraction_result =
        keyword_extractor.extract(lyric, {
          language: "english",
          remove_digits: true,
          return_changed_case: true,
          remove_duplicates: true
        });

      keywords = extraction_result;

      return {
        statusCode: 200,
        body: JSON.stringify(keywords)
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error)
    }
  }
}