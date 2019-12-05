import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import LoginPage from './LoginPage.jsx';
import Registration from './Registration.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
      regFirstName: '',
      regLastName: '',
      regEmail: '',
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
      howDidYouHear: '',
      navMenuVisible: false
    };

    this.userInput = this.userInput.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.menuClick = this.menuClick.bind(this);
  }

  userInput(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  menuClick() {
    this.setState({ navMenuVisible: !this.state.navMenuVisible })
  }

  register() {
    const Fname = this.state.regFirstName;
    const Lname = this.state.regLastName;
    const regEmail = this.state.regEmail;
    const passOne = this.state.regPass;
    const passTwo = this.state.regPassTwo;

    if ( 
        passOne === passTwo &&
        Fname.length > 0 &&
        Lname.length > 0 &&
        regEmail.length > 0 &&
        regEmail.includes('@')
      ) {
      const regInfo = {
        firstName: Fname,
        lastName: Lname,
        email: regEmail,
        password: passOne,
        confirmPassword: passTwo,
        phone: this.state.regPhoneNumber
      }

      // Axios.post('/registration', { regInfo })
      // .then(() => console.log('success'))
      // .catch(() => console.log('registration failed'))
      console.log( 'success: ', regInfo)
    } else {
      alert('Registration failed. This may be due to incomplete fields or passwords not matching.')
    }
  }

  login() {
    const logInfo = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }

    Axios.post('/login', { logInfo })
      .then(() => console.log('success'))
      .catch(() => console.log('login failed'))
  }

  render() {
    return (
      <Router>
        <div className='login-registration'>
          <Navigation menuClick={ this.menuClick } />
          <Switch>
            <Route 
              path='/registration'
              render={ props =>
                <Registration 
                  userInput={ this.userInput }
                  register={ this.register }
                />
              }
            />
            <Route 
              path='/login'
              render={ props => 
                <LoginPage 
                  userInput={this.userInput}
                  login={this.login}
                />
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;