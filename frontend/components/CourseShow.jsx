import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../containers/greeting_container';
import Modal from './Modal';

class CourseShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCourse(this.props.match.params.courseId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.course.id != this.props.match.params.courseId) {
            this.props.fetchCourse(this.props.match.params.courseId)
        }
    }

    render() {
        const wylArray = this.props.course.what_youll_learn || [];
        const renderWyl = wylArray.map( (section) => (
            <div className='wyl-each-section'>
                <div><img className='checkmark' src="http://iconsetc.com/icons-watermarks/simple-dark-gray/broccolidry/broccolidry_checkmark/broccolidry_checkmark_simple-dark-gray_512x512.png" alt="checkmark"/></div> 
                <div>{section}</div>
            </div>
        ))

        const requirementsArray = this.props.course.requirements || [];
        const renderRequirements = requirementsArray.map( (requirement) => (
            <li className='each-requirement'>
                {requirement}
            </li>
        ))

        const whoArray = this.props.course.who_this_course_is_for || [];
        const renderWho = whoArray.map( (point) => (
            <li className='each-who-bullet'>
                {point}
            </li>
        ))
        return (
            <div>
                <Modal/>
                <header className='course-main-header'>
                    <div className='header-logo'>
                        <Link to='/' className='logo'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                        
                    </div>
                    <div className='header-categories'>
                        <img className='categories-icon' src="https://cdn3.iconfinder.com/data/icons/faticons/32/grid-2-01-512.png" alt="categories"/>
                        Categories
                    </div>
                    <form className='header-search-bar'>
                        <input className='search-input' type="text" placeholder='Search for anything'/>
                        <div>
                            <button className='search-submit' type="submit">
                                <img className='magnifying-icon' src="https://image.flaticon.com/icons/png/512/63/63322.png" alt=""/>
                            </button>
                        </div>
                    </form>
                    <div>
                        <img className='cart-icon' src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png" alt="cart"/>
                    </div>
                    <GreetingContainer></GreetingContainer>
                </header>

                <div className='course-header-divider'>

                </div>

                <div className='course-header'>
                    <div className='course-header-textbox'>
                        <p className='course-title'>{this.props.course.title}</p>
                        <br/>
                        <p className='course-description'>{this.props.course.description}</p>
                        <div className='header-description-2'>
                            <div><img className='star-rating' src="https://alarm-reviews.net/wp-content/themes/goodnex/inc/images/4.5.svg" alt="ratings"/> 4.5 ({this.props.course.num_reviews} ratings)</div>
                            <div>{this.props.course.num_students} students enrolled</div>
                        </div>
                        <div className='header-description'>
                            <p className='course-quick-info'>Created by {this.props.course.instructor}</p>
                            <p className='course-quick-info'>Last updated 9/2019</p>
                            <p className='course-quick-info'>English</p>
                        </div>
                        
                    </div>
                </div>

                <div className='show-page-main-container'>


                    <div className='left-side'>
                            <div className='wyl-main'>
                            <header className='wyl-header'>What you'll learn</header>
                            <div className='wyl-sections'>
                                {renderWyl}
                            </div>
                        </div>

                        <div className='requirements-main'>
                            <header className='requirements-header'>Requirements</header>
                            <div className='requirements-sections'>
                                <ul>
                                    {renderRequirements}
                                </ul>
                            </div>
                        </div>

                        <div className='course-description-main'>
                            <div>
                                <header className='course-description-header'>Description</header>
                                <div className='course-description-body'>{this.props.course.course_description}</div>
                            </div>
                        </div>

                        <div className='who-main'>
                            <header className='who-header'>Who this course is for:</header>
                            <ul className='who-bullets'>
                                {renderWho}
                            </ul>
                        </div>
                    </div>

                    <div className='right-side'>
                        <div className='holder'>
                            <div className='sticky-holder'>
                                <div className='course-fixed-info'>
                                    <div className='video-preview'>
                                        <iframe id="ytplayer" 
                                            type="text/html" 
                                            width="355" 
                                            height="215" 
                                            src={this.props.course.youtube_code}
                                            frameborder="0"> 
                                        </iframe>
                                        
                                    </div>
                                    <div className='course-price'>
                                        ${this.props.course.price}
                                    </div>
                                    <div className='course-buttons'>
                                        <div className='add-to-cart'>
                                            Add to cart
                                        </div>
                                        <div className='buy-now'>
                                            Buy now
                                        </div>
                                    </div>
                                    <div className='money-back'>
                                        30-Day Money-Back Guarentee
                                    </div>
                                    <div className='course-includes'>
                                        This course includes
                                        <div className='ondemand-video'>
                                            {this.props.course.duration} hours on-demand video
                                        </div>
                                        <div className='lifetime'>
                                            Full lifetime access
                                        </div>
                                        <div  className='certificate'>
                                            Certificate of Completion
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='footer'></div>
            </div>
        )
    }
}

export default CourseShow;