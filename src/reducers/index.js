
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
            return {...state, keywords:  action.keywords };

        case 'FetchPhotosSuccess':
            console.log('FetchPhotosSuccess');
            // action.photos.map((p) => { var img = new Image(); img.src = p.url; return p } );
            return {...state, photos:  action.photos };

        case 'PhotosHasErrored':
            console.log('PhotosHasErrored');
            return state;

        default: return state;
    }
};
