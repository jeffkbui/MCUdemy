import { RECEIVE_COURSES, RECEIVE_COURSE } from '../actions/course_actions';

const coursesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_COURSES:
            return Object.assign( {}, state, action.courses)
        case RECEIVE_COURSE:
            return Object.assign( {}, state, {[action.course.id]: action.course})
        default:
            return state;
    }
}

export default coursesReducer;