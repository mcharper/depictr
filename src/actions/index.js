
export const lyricsChangedAction = (text) => {
    return dispatch => {
      fetch(process.env.REACT_APP_API_HOST + '/keywords/' + text)
      .then(res => res.json())
      .then(
        json => {
          console.log(JSON.stringify(json));
          dispatch(fetchKeywordsSuccess(json));
          },
        error => dispatch(fetchKeywordsFailure(error))
      )
    };
}

export const fetchKeywordsSuccess = keywords => {
  if(!keywords || keywords.length < 1) {
      return { type: 'DoNothing' };
  }
  else {
    return dispatch => {
      dispatch(updateKeywords(keywords));
      fetch(process.env.REACT_APP_API_HOST + '/photos/' + keywords.join(' '))
      .then(res => res.json())
      .then(
        json => {
          console.log(JSON.stringify(json));
          dispatch(fetchPhotosSuccess(json))
        },
        error => dispatch(fetchPhotosFailure(error))
      )
    };
  }
}

export const updateKeywords = keywords => {
  var alphaRx = /^[A-Za-z0-9]/g;
  console.log(keywords);
  var sanitisedKeywords = keywords.map((el) => { el.replace(alphaRx,'') });

  return {
    type: 'UpdateKeywords',
    keywords: sanitisedKeywords
  }
}

export const fetchKeywordsFailure = error => {
  return {
    type: 'FetchKeywordsFailure',
    data: error
  }
}

export const fetchPhotosSuccess = photos => {
  return {
    type: 'FetchPhotosSuccess',
    photos: photos
  }
}

export const fetchPhotosFailure = error => {
  return {
    type: 'FetchPhotosFailure',
    data: error
  }
}
