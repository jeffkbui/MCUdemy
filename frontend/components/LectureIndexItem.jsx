import React from 'react';
import { Link } from 'react-router-dom';

class LectureIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        this.props.ownProps.history.push(`/api/lectures/${this.props.lecture.id}`)
    }

    render() {
        return (
            <div className='my-courses-course' onClick={this.handleRedirect}>
                {/* <div className='my-courses-thumbnail'>

                </div> */}
                <iframe 
                    id="ytplayer" 
                    type="text/html" 
                    width="231" 
                    height="122" 
                    src="https://www.youtube.com/embed/hFRDkSR2OEo?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=15&origin=https://youtubeembedcode.com&modestbranding=1&autohide=1&showinfo=0"
                    frameBorder="0"> 
                </iframe>
                <div className='my-courses-title'>
                    {this.props.lecture.title}
                </div>
                <div className='my-courses-instructor'>
                    CBR
                </div>
                <div className='my-couse-divider'></div>
                <div className='start-course'>
                    START COURSE
                </div>
            </div>
        )
    }
}

export default LectureIndexItem;