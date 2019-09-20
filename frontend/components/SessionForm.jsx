import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import {openModal} from '../actions/modal_actions';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first_name: '', last_name: '', email: '', password: '', buttonClicked: false}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this)
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
        this.props.processForm(user).then(() => this.props.closeModal());
    }

    handleDemoUser(event) {
      event.preventDefault();
      const demoUser = {
        first_name: 'Tony',
        last_name: 'Stark',
        email: 'tony.stark@starkindustries.com',
        password: 'iloveironman'
      }
      this.props.processForm(demoUser).then(() => this.props.closeModal());
    }

    renderLoginErrors() {
        return(
            <ul>
                {this.props.errors.map((error, i) => {
                return (
                <div className='errors'key={`error-${i}`}>
                    {error}
                </div>
                )
                })}
            </ul>
        );
    }

    renderSignupErrors() {
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
          this.props.formType === 'signup' ? (
            <div className='session-forms-signup'>
              <form onSubmit={this.handleSubmit}>
              <header className='form-header'>Sign Up and Start Learning!</header> 
              <br/>
              <div className='line'></div>
                <div>
                  <br/>
                  {this.state.buttonClicked&&this.renderSignupErrors()}
                  <div className='form-box'>
                    <input className='form-credentials' type="text" placeholder='First Name' onChange={this.update('first_name')}/>
                  </div>
                  <br/>
                  <div className='form-box'>
                    <input className='form-credentials' type="text" placeholder='Last Name' onChange={this.update('last_name')}/>
                  </div>
                  <br/>
                  <div className='form-box'>
                    <input className='form-credentials' type="text" placeholder='Email' onChange={this.update('email')}/>              
                  </div>
                  <br/> 
                  <div className='form-box'>             
                    <input className='form-credentials' type="password" placeholder='Password' onChange={this.update('password')} />       
                  </div>   
                  <br/>
                  <div>
                    <input className='credentials-submit' type="submit" value='Sign Up'/>
                  </div>
                </div>
              </form>
              <br/>
            <div>
              Already have an account? <a href="#" onClick={this.props.openLoginModal} className='other-modal'>Log In</a>
            </div>
            <div>
                Head to Log In to  Access <a href="#" onClick={this.props.openLoginModal} className='other-modal'>Demo User</a>
            </div>
          </div>
          ) : (
            <div className='session-forms-login'>
              <form onSubmit={this.handleSubmit}>
              <header className='form-header'>Log In to Your MCUdemy Account!</header> 
              <br/>
              <div className='line'></div>
                <div>
                  <br/>
                  {this.state.buttonClicked&&this.renderLoginErrors()}
                  <div className='form-box'>
                    <input className='form-credentials' type="text" placeholder='Email' onChange={this.update('email')}/>
                  </div>
                  <br/>
                  <div className='form-box'>
                    <input className='form-credentials' type="password" placeholder='Password' onChange={this.update('password')} />
                  </div>
                  <br/>
                  <div>
                    <input className='credentials-submit' type="submit" value='Log In'/>
                  </div>
                </div>
              </form>
              <br/>
              <div>
                Don't have an account? <a href="#" onClick={this.props.openSignupModal} className='other-modal'>Sign Up</a>
              </div>
              <div>
                Don't want to create an account? <a href="#" onClick={this.handleDemoUser} className='other-modal'>Demo User</a>
              </div>
          </div>
          )
        );
    }
    
}

export default SessionForm;