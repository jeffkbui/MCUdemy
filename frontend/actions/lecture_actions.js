import * as APIUtil from '../utils/lecture_api_util';

export const RECEIVE_LECTURES = 'RECEIVE_LECTURES';
export const RECEIVE_LECTURE = 'RECEIVE_LECTURE';

export const receiveLectures = lectures => ({
    type: RECEIVE_LECTURES,
    lectures
});
  
export const receiveLecture = (lecture) => ({
    type: RECEIVE_LECTURE,
    lecture
});

export const fetchLectures = () => dispatch => (
    APIUtil.fetchLectures().then( (lectures) => dispatch(receiveLectures(lectures)))
)

export const fetchLecture = (id) => dispatch => {
    return (APIUtil.fetchLecture(id).then( (lecture) => dispatch(receiveLecture(lecture))))
}