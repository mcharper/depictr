
export let initialState = {
    mosaicSideSize: 3,
    keywords: [],
    hoverOverTile: null
};

initialState.photos = Array(initialState.mosaicSideSize ** 2).fill({ "url": "https://picsum.photos/200?random&blur" });
initialState.lockedTiles = Array(initialState.mosaicSideSize ** 2).fill(false);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UpdateKeywords':
            var newKeyWords = [...state.keywords, action.keywords].slice(0, 17);
            return { ...state, keywords: newKeyWords };

        case 'Shuffle':
            return { ...state };

        case 'HoverOverTile':
            return { ...state, hoverOverTile: action.ordinal }

        case 'CancelHover':
            return { ...state, hoverOverTile: null }

        case 'LockTile':
            var lockedTiles = state.lockedTiles.map((t, i) => { return i == action.ordinal ? !t : t });
            return { ...state, lockedTiles: lockedTiles }

        case 'FetchPhotosSuccess':
            var filteredPhotos = action.photos.map((p, i) => { return (state.lockedTiles[i] ? state.photos[i] : p) });
            return { ...state, photos: filteredPhotos };

        case 'PhotosHasErrored':
            return state;

        case 'ChangeMosaicSideSize':
            return { ...state, mosaicSideSize: action.data };

        default: return state;
    }
};
