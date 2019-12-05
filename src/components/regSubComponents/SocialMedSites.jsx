import React from 'react';

const SocialMedSites = props => (
  <div>
    <input 
      type='url' 
      name='regLinkedin'
      onChange={ event => props.userInput(event) }
      placeholder='linkedin' />
    <input 
      type='url' 
      name='regGithub'
      onChange={ event => props.userInput(event) }
      placeholder='github' />
    <input 
      type='url' 
      name='regPersonalSite'
      onChange={ event => props.userInput(event) }
      placeholder='personal-website' />
  </div>
);

export default SocialMedSites;