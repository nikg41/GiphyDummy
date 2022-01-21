import {
    SAVE_DATA
} from '../constants';

const initialState = {
    data:""
};
const giphyDatareducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
export default giphyDatareducer;