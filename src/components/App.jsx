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
      <Router>
        <div className='login-registration'>
          <Navigation menuClick={ this.menuClick } />
          <Switch>
            <Route 
              path='/registration'
              render={ props =>
                <Registration 
                  userInput={ this.userInput }
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