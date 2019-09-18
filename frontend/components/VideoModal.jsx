import React from 'react';
import { withRouter } from 'react-router-dom';

class VideoModal extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchCourse(this.props.match.params.courseId)
    }

    render() {
        return (
            <div className='video-modal-container'>
                <div className='video-modal-header'>
                    <div className='video-modal-title'>{this.props.course.title}</div>
                </div>
                <iframe 
                    id="ytplayer" 
                    type="text/html" 
                    width="640" 
                    height="432" 
                    src={this.props.course.youtube_code}
                    frameBorder="0"> 
                </iframe>
                <div className='video-modal-footer'>

                </div>
            </div>
        )
    }
}

export default withRouter(VideoModal);