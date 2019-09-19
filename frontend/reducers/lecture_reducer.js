import { RECEIVE_LECTURES, RECEIVE_LECTURE } from '../actions/lecture_actions';

const lectureReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LECTURES:
            return Object.assign( {}, state, action.lectures)
        case RECEIVE_LECTURE:
            return Object.assign( {}, state, {[action.lecture.id]: action.lecture})
        default:
            return state;
    }
}

export default lectureReducer;