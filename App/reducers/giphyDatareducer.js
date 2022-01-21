import {
    SAVE_TRENDING_DATA
} from '../constants';

const initialState = {
    trendingData: ""
};
const giphyDatareducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_TRENDING_DATA:
            return {
                ...state,
                trendingData: action.payload
            };
        default:
            return state;
    }
}
export default giphyDatareducer;