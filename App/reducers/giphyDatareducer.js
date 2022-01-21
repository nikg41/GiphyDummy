import {
    SAVE_TRENDING_DATA,
    SAVE_MODAL_DATA,
    CLEAR_MODAL_DATA,
    SAVE_TRENDING_MORE_DATA,
    CLEAR_TRENDING_MORE_DATA,
    SAVE_TRENDING_MORE_STICKERS,
    CLEAR_TRENDING_MORE_STICKERS
} from '../constants';

const initialState = {
    trendingData: [],
    trendingStickers: [],
    modalData: "",
    isVisible: false,
    trendingMoreData: [],
    trendingMoreStickers: []
};
const giphyDatareducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRENDING_DATA:
            return {
                ...state,
                ...action.payload
            };
        case SAVE_TRENDING_MORE_DATA:
            let data = state.trendingMoreData.concat(action.payload.data);
            return {
                ...state,
                trendingMoreData: data
            };
        case CLEAR_TRENDING_MORE_DATA:
            return {
                ...state,
                trendingMoreData: []
            };
        case SAVE_TRENDING_MORE_STICKERS:
            let stickerData = state.trendingMoreStickers.concat(action.payload.data);
            return {
                ...state,
                trendingMoreStickers: stickerData
            };
        case CLEAR_TRENDING_MORE_STICKERS:
            return {
                ...state,
                trendingMoreStickers: []
            };
        case SAVE_MODAL_DATA:
            return {
                ...state,
                modalData: action.payload,
                isVisible: true
            };
        case CLEAR_MODAL_DATA:
            return {
                ...state,
                modalData: "",
                isVisible: false
            };
        default:
            return state;
    }
}
export default giphyDatareducer;