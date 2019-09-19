import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import coursesReducer from './courses_reducer';
import lectureReducer from './lecture_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    courses: coursesReducer,
    lectures: lectureReducer
})

export default entitiesReducer;