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
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.course.id != this.props.match.params.courseId) {
            this.props.fetchCourse(this.props.match.params.courseId)
        }
    }

    handlePopUp() {
        const popup = document.getElementById('myPopup');
        popup.classList.toggle('show');
        setTimeout(() => popup.classList.toggle('show'), 2000);
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
                <Modal course={this.props.course}/>
                <header className='course-main-header'>
                    <div className='header-logo'>
                        <Link to='/' className='logo'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                    </div>
                    <div className='categories-dropdown-main-container'>
                        <div className='header-categories'>
                            <img className='categories-icon' src="https://cdn3.iconfinder.com/data/icons/faticons/32/grid-2-01-512.png" alt="categories"/>
                            Categories
                        </div>
                        <div className='categories-dropdown-body'>
                            <div className='categories-item'>
                                Thor
                            </div>
                            <div className='categories-item'>
                                Iron Man
                            </div>
                            <div className='categories-item'>
                                Captain America
                            </div>
                            <div className='categories-item'>
                                Hulk
                            </div>
                            <div className='categories-item'>
                                Thanos
                            </div>
                        </div>
                    </div>
                    <form className='header-search-bar' onSubmit={() => this.props.history.push('/api/search-courses')}>
                        <input className='search-input' type="text" placeholder='Search for anything'/>
                        <div>
                            <button className='search-submit' type="submit">
                                <img className='magnifying-icon' src="https://image.flaticon.com/icons/png/512/63/63322.png" alt=""/>
                            </button>
                        </div>
                    </form>
                    <div className='profiles-container'>
                        <a className='linkedin' href="https://www.linkedin.com/in/jeffreykbui/">LinkedIn</a>
                        <a className='github' href="https://github.com/jeffkbui/MCUdemy/wiki">GitHub</a>
                    </div>
                    <div>
                        {/* <img className='cart-icon' src="https://icons-for-free.com/iconfiles/png/512/cart-131964784999299812.png" alt="cart"/>
                        <div className='cart'>Cart is empty</div> */}
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

                    <div className='right-side' style={{
                            height: ($('body').height() - 400)
                        }}>
                        <div className='course-fixed-info'>
                            <button className='video-preview' onClick={() => this.props.openModal('video')}>
                                {/* <div className='play-button-circle'>
                                    <img className='play-button' src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/play-icon-18-256.png" alt=""/>
                                </div> */}
                                <iframe 
                                    id="ytplayer" 
                                    type="text/html" 
                                    width="355"
                                    height="215" 
                                    src={this.props.course.youtube_code}
                                    frameBorder="0"> 
                                </iframe>
                                <div className='testing'></div>
                            </button>
                            <div className='course-price'>
                                ${this.props.course.price}
                            </div>
                            <div className='course-buttons'>
                                <div className='add-to-cart' onClick={this.handlePopUp}>
                                    Add to cart
                                </div>
                                <div className='popup'>
                                    <div className='popup-message' id='myPopup'>
                                        Added to cart!
                                        {/* MCUdemy is experiencing some technical difficulties with adding courses to the cart. Our scheduled maintenance is estimated to finish within 5 hours. Thank you for your patience. */}
                                    </div>
                                </div>
                                <div className='buy-now' onClick={() => this.props.openModal('video')}>
                                    Preview Course
                                </div>
                            </div>
                            <div className='money-back'>
                                30-Day Money-Back Guarentee
                            </div>
                            <div className='course-includes'>
                                This course includes
                                <div className='ondemand-video'>
                                    {this.props.course.duration} minutes on-demand video
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

                <div className='course-show-footer-main'>
                    <div className='course-show-footer-1'>
                        <div className='footer-text'>
                            Top companies choose MCUdemy to build in-demand Marvel skills.
                        </div>
                        <div className='footer-images'>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/lyft-logo.svg" alt="lyft"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/pinterest-logo.svg" alt="pinterest"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/adidas-logo.svg" alt="adidas"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/eventbrite-logo.svg" alt="event"/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/surveymonkey-logo.svg" alt=""/>
                            <img className='footer-company-image' src="https://i.udemycdn.com/partner-logos/booking-logo.svg" alt="booking"/>
                        </div>
                    </div>
                    <div className='course-show-footer-2'>
                        <div className='header-logo'>
                            <Link to='/' className='logo2'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                        </div>
                        <div className='copyright'>Copyright 2019 MCUdemy, Inc.</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseShow;