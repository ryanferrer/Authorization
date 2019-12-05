import React from 'react';
import NameEmailNumberPass from './regSubComponents/NameEmailNumberPass.jsx';
import ResEdLang from './regSubComponents/ResEdLang.jsx';
import SocialMedSites from './regSubComponents/SocialMedSites.jsx';
import Other from './regSubComponents/Other.jsx';
import imgOne from '../../assets/img/person-pointing-on-a-map.jpg';

const Registration = props => (
  <div className='registration'>
    <div>
      <h2>Work from anywhere</h2>
      <img src={ imgOne } alt='person pointing on a map'/>
    </div>
    <form>
      <NameEmailNumberPass userInput={props.userInput} />
      <ResEdLang userInput={props.userInput} />
      <SocialMedSites userInput={props.userInput} />
      <Other userInput={props.userInput} />
      <button type='submit' className='registration-btn'>register</button>
    </form>
  </div>
);

export default Registration;