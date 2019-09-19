import { connect } from 'react-redux';
import LectureIndex from '../components/LectureIndex';
import { fetchLectures } from '../actions/lecture_actions';

const mapStateToProps = (state) => {
    return {
        lectures: Object.keys(state.entities.lectures).map( id => state.entities.lectures[id]),
    }
};

const mapDispatchToProps = (dispatch) => ({
    fetchLectures: () => dispatch(fetchLectures())
});

export default connect(mapStateToProps, mapDispatchToProps)(LectureIndex);