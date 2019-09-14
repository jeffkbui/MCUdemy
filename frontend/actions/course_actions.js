import * as APIUtil from '../utils/course_api_util';

export const RECEIVE_COURSES = 'RECEIVE_COURSES';
export const RECEIVE_COURSE = 'RECEIVE_COURSE';

export const receiveCourses = courses => ({
    type: RECEIVE_COURSES,
    courses
});
  
export const receiveCourse = (course) => ({
    type: RECEIVE_COURSE,
    course
});

export const fetchCourses = () => dispatch => (
    APIUtil.fetchCourses().then( (courses) => dispatch(receiveCourses(courses)))
)

export const fetchCourse = (id) => dispatch => {
    return (APIUtil.fetchCourse(id).then( (course) => dispatch(receiveCourse(course))))
}