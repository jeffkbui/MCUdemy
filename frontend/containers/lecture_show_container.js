import { connect } from 'react-redux';
import LectureShow from '../components/LectureShow';
import { fetchLecture } from '../actions/lecture_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        lecture: state.entities.lectures[ownProps.match.params.lectureId] || {},
        ui: state.ui
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchLecture: (id) => dispatch(fetchLecture(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LectureShow);