
const MaxMosaicSideSize = 10;

export let initialState = {
    mosaicSideSize: 3,
    keywords: [],
    hoverOverTile: null,
    swapSource: null
};

initialState.photos = Array(MaxMosaicSideSize ** 2).fill({ "url": "" });
initialState.lockedTiles = Array(MaxMosaicSideSize ** 2).fill(false);

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UpdateKeywords':
            return { ...state, keywords: action.keywords };

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
            // Reset locked tiles for now if mosaic size changes, because locking is currently based on tile slot
            return { ...state, mosaicSideSize: action.data, lockedTiles: Array(action.data ** 2).fill(false) };

        case 'SetSwapSource':
            return { ...state, swapSource: action.ordinal };

        case 'Swap':
            let source = state.photos[state.swapSource];
            let target = state.photos[action.ordinal];

            const changedPhotoArray = state.photos.map((photo, index) => {
                if (index == action.ordinal) {
                    return source;
                }

                if (index == state.swapSource) {
                    return target;
                }

                // Keep it as-is
                return photo;
            })

            const changedLockedTilesArray = state.lockedTiles.map((lockedStatus, index) => {
                if (index == action.ordinal) {
                    return state.lockedTiles[state.swapSource];
                }

                if (index == state.swapSource) {
                    return state.lockedTiles[action.ordinal];
                }

                // Keep it as-is
                return lockedStatus;
            })

            return { ...state, photos: [...changedPhotoArray], lockedTiles: [...changedLockedTilesArray] };

        default: return state;
    }
};
