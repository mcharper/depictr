
export const initialState = { photos: [
    {"url":"http://farm5.staticflickr.com/4201/34882954336_52c5699543.jpg"},
    {"url":"http://farm1.staticflickr.com/392/30873163154_ac07d0de67.jpg"},
    {"url":"http://farm1.staticflickr.com/276/31529710482_2c36747c86.jpg"},
    {"url":"http://farm3.staticflickr.com/2762/32122921664_a725e56daf.jpg"},
    {"url":"http://farm5.staticflickr.com/4497/37788529252_39898ef370.jpg"},
    {"url":"http://farm1.staticflickr.com/386/32729457575_2034c7b149.jpg"},
    {"url":"http://farm5.staticflickr.com/4505/36584553984_f5c2af00f3.jpg"},
    {"url":"http://farm6.staticflickr.com/5456/30190282953_22e6e9dfd1.jpg"},
    {"url":"http://farm1.staticflickr.com/631/31744466116_f9a0a676bd.jpg"}
], keywords: [] };

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UpdateKeywords':
            console.log('UpdateKeywords');
            var newState = {...state, keywords:  action.keywords }
            console.log(JSON.stringify(newState));
            return newState;

        case 'FetchPhotosSuccess':
            console.log('FetchPhotosSuccess');
            // action.photos.map((p) => { var img = new Image(); img.src = p.url; return p } );
            var newState = {...state, photos:  action.photos }
            console.log(JSON.stringify(newState));
            return newState;

        case 'PhotosHasErrored':
            console.log('PhotosHasErrored');
            console.log(JSON.stringify(action.data));
            return state;

        default: return state;
    }
};
