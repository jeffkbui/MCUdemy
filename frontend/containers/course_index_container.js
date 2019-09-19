import { connect } from 'react-redux';
import CourseIndex from '../components/CourseIndex';
import { fetchCourses } from '../actions/course_actions';

const mapStateToProps = (state) => {
    return {
        courses: Object.keys(state.entities.courses).map( id => state.entities.courses[id]),
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses())
});

export default connect(mapStateToProps, mapDispatchToProps)(CourseIndex);
