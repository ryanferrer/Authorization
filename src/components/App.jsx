import React, { Component } from 'react';
import LoginPage from './LoginPage.jsx';

import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: ''
    };

    this.userInput = this.userInput.bind(this);
    this.login = this.login.bind(this);
  }

  userInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value })
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
        <LoginPage 
          userInput={this.userInput}
          login={this.login}
        />
      </div>
    );
  }
}

export default App;