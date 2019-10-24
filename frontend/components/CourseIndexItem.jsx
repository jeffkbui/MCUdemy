import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class CourseIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect() {
        this.props.history.push(`/api/courses/${this.props.course.id}`)
    }

    render() {
        return (
            <div>
                <Link to={`/api/courses/${this.props.course.id}`} className='course-item-link'>
                <div className='course-item-main' onClick={this.handleRedirect}>
                    <div className='course-index-video-preview'>
                        <iframe 
                            id="ytplayer" 
                            type="text/html" 
                            width="231" 
                            height="122" 
                            src={this.props.course.youtube_code}
                            frameBorder="0"> 
                        </iframe>
                        <div className='youtube-blocker'></div>
                    </div>
                    <div className='item-title'>
                        {this.props.course.title}
                    </div>
                    <div className='item-index-text-container'>
                        <div className='item-instructor'>
                            {this.props.course.instructor}
                        </div>
                        <div className='item-ratings-1'>
                        <img className='star-rating' src="https://alarm-reviews.net/wp-content/themes/goodnex/inc/images/4.5.svg" alt="ratings"/>
                            <div id='item-ratings-2'>4.5</div>
                            ({this.props.course.num_reviews})
                        </div>
                        <div className='item-price'>
                            ${this.props.course.price}
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    }
}

export default withRouter(CourseIndexItem);