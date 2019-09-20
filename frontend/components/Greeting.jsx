import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, openModal, ownProps}) => {

    const handleLogout = () => {
        logout();
        ownProps.history.push('/');
    }

    const loggedOutGreeting = () => (
        <div className='buttons'>
            <button className='login' onClick={() => openModal('login')}>Log In</button>
            
            <button className='signup' onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    )

    const loggedInGreeting = () => (
        <div className='logged-in-main'>

            <div>
                <Link className='my-courses-link' to='/api/lectures'>My Courses</Link>
            </div>

            <div className='account'>
                <div className='greeting'>
                    {currentUser.first_name[0]}{currentUser.last_name[0]}
                </div>
                    <div className='user-dropdown'>
                        <div className='dropdown-content'> 
                            <div className='greeting'>
                                {currentUser.first_name[0]}{currentUser.last_name[0]}
                            </div>
                            <div className='account-info-container'>
                                <div className='full-name'>
                                    {currentUser.first_name} {currentUser.last_name}
                                </div>
                                <div className='email'>
                                    {currentUser.email}
                                </div>
                            </div>
                        </div>
                        <Link to={`/api/users/${currentUser.id}/edit`} className='drop-down-option'>Account</Link>
                        <div className='line'></div>
                        <div className='drop-down-option' onClick={handleLogout}>Logout</div>
                    </div>
                <br/>
            </div>

        </div>
    )
    return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;