import React from 'react';
import NameEmailNumberPass from './regSubComponents/NameEmailNumberPass.jsx';
import ResEdLang from './regSubComponents/ResEdLang.jsx';
import SocialMedSites from './regSubComponents/SocialMedSites.jsx';
import Other from './regSubComponents/Other.jsx';

const Registration = props => (
  <div className='registration'>
    <form>
      <NameEmailNumberPass userInput={props.userInput} />
      <ResEdLang userInput={props.userInput} />
      <SocialMedSites userInput={props.userInput} />
      <Other userInput={props.userInput} />
      <button type='submit'>register</button>
    </form>
  </div>
);

export default Registration;