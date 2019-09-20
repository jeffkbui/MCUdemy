import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../containers/greeting_container';
class EditUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
                        first_name: this.props.user.first_name, 
                        last_name: this.props.user.last_name, 
                        email: this.props.user.email, 
                        password: this.props.user.password, 
                        buttonClicked: false
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({
            [field]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({buttonClicked: true})
        const user = Object.assign({}, this.state);
        delete user['buttonClicked'];
        this.props.processForm(user).then(() => this.props.history.push('/'));
    }

    renderEditErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                return (
                <div className='errors' key={`error-${i}`}>
                    {error}
                </div>
                )
                })}
            </ul>
        );
    }

    render() {
    
        return (
            <div>

                <div className='profile-main-container'>
                    <header className='side-header'>
                        <div className='header-logo'>
                            <Link to='/' className='logo'>MCU</Link><Link to='/' className='header-logo'></Link>
                        </div>
                    </header>

                    <div className='edit-user-right-side-container'>
                        <div className='edit-user-greeting'>
                            <GreetingContainer></GreetingContainer>
                        </div>

                        <div className='edit-user-form'>
                            <form onSubmit={this.handleSubmit}>
                                <header className='edit-form-header'>Edit profile</header> 
                                <br/>
                                
                                <div>
                                    <br/>
                                    {this.state.buttonClicked&&this.renderEditErrors()}

                                    <div class='form-first-name'>
                                        First Name
                                    </div>

                                    <div className='form-box'>
                                        <input className='edit-user-form-credentials' type="text" value={this.state.first_name} onChange={this.update('first_name')}/>
                                    </div>
                                    <br/>

                                    <div class='form-last-name'>
                                        Last Name
                                    </div>

                                    <div className='form-box'>
                                        <input className='edit-user-form-credentials' type="text" value={this.state.last_name} onChange={this.update('last_name')}/>
                                    </div>
                                    <br/>

                                    <div class='form-email'>
                                        Email
                                    </div>

                                    <div className='form-box'>
                                        <input className='edit-user-form-credentials' type="text" value={this.state.email} onChange={this.update('email')}/>              
                                    </div>
                                    <br/> 

                                    <div class='form-password'>
                                        New Password (optional)
                                    </div>

                                    <div className='form-box'>             
                                        <input className='edit-user-form-credentials' type="password" placeholder='Password' onChange={this.update('password')} />       
                                    </div>
   
                                    <br/>
                                    <div className='save-edit-user-container'>
                                        <input className='edit-user-credentials-submit' type="submit" value='Save'/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                 </div>

                 <div className='course-show-footer-2'>
                    <div className='header-logo'>
                        <Link to='/' className='logo2'>MCU</Link><Link to='/' className='header-logo'>demy</Link>
                    </div>
                    <div className='copyright'>Copyright 2019 MCUdemy, Inc.</div>
                </div>

            </div>
        )
    }
}

export default EditUser;