export const changeMosaicSideSize = mosaicSideSize => {
  return {
    type: 'ChangeMosaicSideSize',
    data: mosaicSideSize
  }
}

export const lyricsChangedAction = (text, batchSize) => {
  var singleLinifiedText = text.replace(/(\r\n|\n|\r)/gm, ' ');
  return dispatch => {
    fetch(process.env.REACT_APP_API_HOST + '/keywords/' + singleLinifiedText)
      .then(res => res.json())
      .then(
        result => {
          dispatch(fetchKeywordsSuccess(result, batchSize));
        },
        error => dispatch(fetchKeywordsFailure(error))
      )
  };
}

export const fetchPhotos = (keywords, batchSize) => {
  return dispatch => {
    fetch(process.env.REACT_APP_API_HOST + `/photos/${keywords.join(' ')}?batchSize=${batchSize}`)
      .then(res => res.json())
      .then(
        json => {
          dispatch(fetchPhotosSuccess(json))
        },
        error => dispatch(fetchPhotosFailure(error))
      );
  }
}

export const shuffleAction = (keywords, batchSize) => {
  return dispatch => dispatch(fetchPhotos(keywords, batchSize));
}

export const hoverOverTile = (ordinal) => {
  return {
    type: 'HoverOverTile',
    ordinal: ordinal
  }
}

export const cancelHover = (ordinal) => {
  return {
    type: 'CancelHover',
    ordinal: ordinal
  }
}

export const lockTile = (ordinal) => {
  return {
    type: 'LockTile',
    ordinal: ordinal
  }
}

const fetchKeywordsSuccess = (keywords, batchSize) => {
  if (!keywords || keywords.length < 1) {
    return { type: 'DoNothing' };
  }
  else {
    return dispatch => {
      dispatch(updateKeywords(keywords));
      dispatch(fetchPhotos(keywords, batchSize));
    };
  }
}

const updateKeywords = keywords => {
  var alphaRx = /[^0-9a-z]/gi;
  var sanitisedKeywords = keywords.map((el) => { return el.replace(alphaRx, ''); });

  return {
    type: 'UpdateKeywords',
    keywords: sanitisedKeywords
  }
}

const fetchKeywordsFailure = error => {
  return {
    type: 'FetchKeywordsFailure',
    data: error
  }
}

const fetchPhotosSuccess = photos => {
  return {
    type: 'FetchPhotosSuccess',
    photos: photos
  }
}

const fetchPhotosFailure = error => {
  return {
    type: 'FetchPhotosFailure',
    data: error
  }
}

