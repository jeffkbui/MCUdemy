import React from 'react';

const Greeting = ({ currentUser, logout, openModal }) => {

    const loggedOutGreeting = () => (
        <div className='buttons'>
            <button className='login' onClick={() => openModal('login')}>Log In</button>
            
            <button className='signup' onClick={() => openModal('signup')}>Sign Up</button>
        </div>
    )

    const loggedInGreeting = () => (
        <div className='account'>
            <div className='greeting'>
                {currentUser.first_name[0]}{currentUser.last_name[0]}
            </div>
            <br/>
            <button className='logout' onClick={logout}>Logout</button>
        </div>
    )
    return currentUser ? loggedInGreeting() : loggedOutGreeting()
}

export default Greeting;