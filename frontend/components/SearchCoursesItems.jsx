import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SearchCoursesItem extends React.Component {
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
                    <div className='search-item-main-container'>
                        <div className='search-item-body'>
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

                            <div className='search-item-text-container'>
                                <div className='search-item-title'>
                                    {this.props.course.title}
                                </div>

                                <div className='search-item-logistics'>
                                    <div>Highest Rated</div>
                                    <div>{this.props.course.num_videos} lecture</div>
                                    <div>{this.props.course.duration} minutes</div>
                                    <div>All Levels</div>
                                </div>

                                <div className='search-item-description'>
                                    {this.props.course.description} | By {this.props.course.instructor}
                                </div>
                            </div>

                            <div className='search-item-numbers'>
                                <div className='search-item-price'>
                                    ${this.props.course.price}
                                </div>

                                <div className='search-item-rating'>
                                    <img className='star-rating' src="https://alarm-reviews.net/wp-content/themes/goodnex/inc/images/4.5.svg" alt="ratings"/>
                                    4.5
                                </div>

                                <div className='search-item-reviews'>
                                    ({this.props.course.num_reviews} ratings)
                                </div>

                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        )
    }
}

export default withRouter(SearchCoursesItem);