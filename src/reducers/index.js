
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
    ], 
    keywords: [],
    lockedTiles: [false, false, false, false, false, false, false, false, false],
    hoverOverTile: null
 };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UpdateKeywords':
            var newKeyWords = [...state.keywords, action.keywords].slice(0,17);
            return {...state, keywords: action.keywords };

        case 'Shuffle':
            return {...state };

        case 'HoverOverTile':
            return { ...state,  hoverOverTile: action.ordinal }
            
        case 'CancelHover':
            return { ...state,  hoverOverTile: null }
            
        case 'LockTile':
            var lockedTiles = state.lockedTiles.map((t, i) => { return i == action.ordinal ? !t : t } );
            return { ...state, lockedTiles: lockedTiles }

        case 'FetchPhotosSuccess':
            var filteredPhotos = action.photos.map((p, i) => { return (state.lockedTiles[i] ? state.photos[i] : p) } );
            return {...state, photos: filteredPhotos };

        case 'PhotosHasErrored':
            return state;

        default: return state;
    }
};
