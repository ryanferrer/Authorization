import React from 'react';

const Navigation = props => {
  let menuVisible;

  if (props.LandingPageMenuVisible === false && screen.width < 1366 ) {
      menuVisible = {
      display: 'none'
      }
    } else {
      menuVisible = {
        display: 'block'
    }
  }

  return (
    <nav className='landingPage-navBar'>
      <div className="landingPage-logo-menu">
        <h2 className='logo'>RemoteReq</h2>
        <div className="landingPage-menu">
          <label 
            htmlFor='toggle'
            className='hamburgerMenu'
            onClick={() => props.menuClick()}
          >&#9776;</label>
        </div>
      </div>
      <div className='landingPage-navBar-links' style={ menuVisible }>
        <ul>
          <li>home</li>
          <li>employers</li>
          <li className='job-seekers'>job seekers</li>
          <li className='landingPage-signIn-button'><a href='http://localhost:8080/login'>
          sign in
        </a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;