import React, { Component } from 'react';
import LoginPage from './LoginPage.jsx';
import Registration from './Registration.jsx';

import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
      regFirstName: '',
      regLastName: '',
      regPhoneNumber: '',
      regPass: '',
      regPassTwo: '',
      USEligible: '',
      regEd: '',
      regEngFluent: '',
      regOtherLang: '',
      regLinkedin: '',
      regGithub: '',
      regPersonalSite: '',
      regAccessToInternet: '',
      howDidYouHear: ''
    };

    this.userInput = this.userInput.bind(this);
    this.login = this.login.bind(this);
  }

  userInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  login() {
    const logInfo = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    Axios.post('/login', { logInfo })
      .then(() => console.log('success'))
      .catch(() => console.log('you\'re a failure!'))
  }

  render() {
    return (
      <div className="loginPage">
        <Registration 
          userInput={ this.userInput }
        />
        {/* <LoginPage 
          userInput={this.userInput}
          login={this.login}
        /> */}
      </div>
    );
  }
}

export default App;