import {
    SAVE_TRENDING_DATA,
    SAVE_MODAL_DATA,
    CLEAR_MODAL_DATA,
    SAVE_TRENDING_MORE_DATA
} from '../constants';

const initialState = {
    trendingData: {},
    modalData: "",
    isVisible: false,
    trendingMoreData: {}
};
const giphyDatareducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRENDING_DATA:
            return {
                ...state,
                trendingData: action.payload
            };
        case SAVE_TRENDING_MORE_DATA:
            return {
                ...state,
                trendingMoreData: action.payload
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