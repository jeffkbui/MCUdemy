import { connect } from 'react-redux';
import Splash from '../components/Splash';
import { fetchCourses } from '../actions/course_actions';

const mapStateToProps = (state, ownProps) => {
    return ({
        courses: Object.keys(state.entities.courses).map( id => state.entities.courses[id]),
    })
};

const mapDispatchToProps = (dispatch) => {
    return ({
        fetchCourses: () => dispatch(fetchCourses())
    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);