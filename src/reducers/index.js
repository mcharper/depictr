
export const initialState = { photos: [
    {"url":"https://picsum.photos/200?random&blur"},
    {"url":"https://picsum.photos/g/210?random"},
    {"url":"https://picsum.photos/200?random&blur"},
    {"url":"https://picsum.photos/g/210?random"},
    {"url":"https://picsum.photos/200?random&blur"},
    {"url":"https://picsum.photos/g/210?random"},
    {"url":"https://picsum.photos/200?random&blur"},
    {"url":"https://picsum.photos/g/210?random"},
    {"url":"https://picsum.photos/200?random&blur"},
], keywords: [] };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UpdateKeywords':
            return {...state, keywords: action.keywords };

        case 'Shuffle':
            return {...state };

        case 'FetchPhotosSuccess':
            var photoLockArray=[0,0,0,1,0,0,0,0,0];
            var filteredPhotos = action.photos.map((p, i) => { return (photoLockArray[i] == 0) ? p : state.photos[i] } );
            return {...state, photos: filteredPhotos, keywords: state.keywords };

        case 'PhotosHasErrored':
            return state;

        default: return state;
    }
};
